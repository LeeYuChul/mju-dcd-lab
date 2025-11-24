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
    
    const { html: appHtml, initialData } = await render();
    
    let html = template.replace(`<!--app-html-->`, appHtml);
    
    // Inject initial data if available
    if (initialData) {
      const jsonStr = JSON.stringify(initialData);
      const base64Str = Buffer.from(jsonStr).toString('base64');
      html = html.replace(
        `<!--app-data-->`,
        `<script>window.__INITIAL_DATA__=JSON.parse(new TextDecoder().decode(Uint8Array.from(atob("${base64Str}"),c=>c.charCodeAt(0))))</script>`
      );
    }
      
    res.setHeader('Content-Type', 'text/html');
    return res.status(200).send(html);
  } catch (error) {
    console.error('SSR Error:', error);
    return res.status(500).send('Internal Server Error');
  }
}
