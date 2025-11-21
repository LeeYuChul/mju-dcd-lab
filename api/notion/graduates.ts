import type { VercelRequest, VercelResponse } from '@vercel/node';

interface NotionResponse {
  results: Array<{
    properties: {
      이름: { title: Array<{ plain_text: string }> };
      회사: { rich_text: Array<{ plain_text: string }> };
      연구분야: { rich_text: Array<{ plain_text: string }> };
      사진: { files: Array<{ file: { url: string } }> };
      입학년도: { number: number };
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

  const databaseId = process.env.GRDUATE_MASTER_DB || process.env.VITE_GRDUATE_MASTER_DB;
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

    const graduates = data.results.map((page) => ({
      name: page.properties.이름.title[0]?.plain_text || '',
      company: page.properties.회사.rich_text[0]?.plain_text || '',
      researchField: page.properties.연구분야.rich_text[0]?.plain_text || '',
      photo: page.properties.사진.files[0]?.file.url || '',
      year: page.properties.입학년도.number || 0,
    }));

    // 입학년도 오름차순, 같으면 이름 오름차순 정렬
    graduates.sort((a, b) => {
      if (a.year !== b.year) {
        return a.year - b.year;
      }
      return a.name.localeCompare(b.name, 'ko-KR');
    });

    return res.status(200).json({ graduates });
  } catch (error) {
    console.error('Failed to fetch graduates:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
