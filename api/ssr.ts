import type { VercelRequest, VercelResponse } from '@vercel/node';
import fs from 'fs';
import path from 'path';
import { pathToFileURL } from 'url';
import mime from 'mime-types';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const url = req.url || '/';

  // Serve static files from dist/client/assets
  if (url.startsWith('/assets/')) {
    try {
      const filePath = path.join(process.cwd(), 'dist/client', url);
      if (fs.existsSync(filePath)) {
        const contentType = mime.lookup(filePath) || 'application/octet-stream';
        res.setHeader('Content-Type', contentType);
        // Cache control for static assets
        res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
        const content = fs.readFileSync(filePath);
        return res.status(200).send(content);
      }
    } catch (error) {
      console.error('Static file serving error:', error);
      // Continue to SSR if file not found or error (though likely 404 is better here if we are sure)
    }
  }

  try {
    const distClient = path.join(process.cwd(), 'dist/client');
    const distServer = path.join(process.cwd(), 'dist/server');
    
    const template = fs.readFileSync(path.join(distClient, 'index.html'), 'utf-8');
    
    // @ts-ignore
    const { render } = await import(pathToFileURL(path.join(distServer, 'entry-server.js')).href);
    
    const { html: appHtml } = await render();
    
    let html = template.replace(`<!--app-html-->`, appHtml);
    
    // JSON 데이터 노출 방지를 위해 데이터 주입 스크립트 제거
    html = html.replace(/<script>\s*window\.__INITIAL_DATA__\s*=\s*<!--app-data-->\s*<\/script>/g, '');
    
    // 클라이언트 측 Hydration 방지를 위해 JS 모듈 스크립트 제거 (순수 HTML/CSS만 제공)
    html = html.replace(/<script type="module".*?<\/script>/g, '');
    html = html.replace(/<link rel="modulepreload".*?>/g, '');
      
    res.setHeader('Content-Type', 'text/html');
    return res.status(200).send(html);
  } catch (error) {
    console.error('SSR Error:', error);
    return res.status(500).send('Internal Server Error');
  }
}
