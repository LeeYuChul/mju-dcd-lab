import type { VercelRequest, VercelResponse } from '@vercel/node';

interface NotionResponse {
  results: Array<{
    id: string;
    properties: {
      이름: { title: Array<{ plain_text: string }> };
      배경색: { rich_text: Array<{ plain_text: string }> };
      대표이미지: { files: Array<{ file: { url: string } }> };
    };
  }>;
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // CORS 헤더 설정
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Preflight 요청 처리
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // POST 요청만 허용
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const databaseId = process.env.PROJECT_LIST_DB || process.env.VITE_PROJECT_LIST_DB;
  const token = process.env.DB_SECRETS || process.env.VITE_DB_SECRETS;

  if (!databaseId || !token) {
    console.error('Missing environment variables');
    return res.status(500).json({ error: 'Server configuration error' });
  }

  try {
    const response = await fetch(
      `https://api.notion.com/v1/databases/${databaseId}/query`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
          'Notion-Version': '2022-06-28',
        },
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Notion API error:', errorText);
      return res.status(response.status).json({ 
        error: 'Failed to fetch from Notion API' 
      });
    }

    const data: NotionResponse = await response.json();

    const projects = data.results.map((page) => ({
      id: page.id,
      title: page.properties.이름.title[0]?.plain_text || '',
      backgroundColor: page.properties.배경색.rich_text[0]?.plain_text || 'FFFFFF',
      image: page.properties.대표이미지.files[0]?.file.url || '',
    }));

    return res.status(200).json({ projects });
  } catch (error) {
    console.error('Failed to fetch projects:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
