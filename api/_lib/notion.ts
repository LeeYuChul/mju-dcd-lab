import type { MasterStudent, GraduateStudent, Project, News } from '../types/notion';

interface NotionResponse {
  results: Array<any>;
}

const getEnv = (key: string) => {
  // Vercel environment variables or Vite environment variables
  return process.env[key] || process.env[`VITE_${key}`];
};

export const getMasterStudents = async (): Promise<MasterStudent[]> => {
  const databaseId = getEnv('IN_COURSE_MASTER_DB');
  const token = getEnv('DB_SECRETS');

  if (!databaseId || !token) {
    console.error('Missing environment variables for Master Students');
    return [];
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
      console.error('Notion API error:', await response.text());
      return [];
    }

    const data: NotionResponse = await response.json();

    const students = data.results.map((page) => ({
      name: page.properties.이름.title[0]?.plain_text || '',
      email: page.properties.이메일.rich_text[0]?.plain_text || '',
      researchField: page.properties.연구분야.rich_text[0]?.plain_text || '',
      photo: page.properties.사진.files[0]?.file.url || '',
      year: page.properties.입학년도.number || 0,
    }));

    students.sort((a, b) => {
      if (a.year !== b.year) {
        return a.year - b.year;
      }
      return a.name.localeCompare(b.name, 'ko-KR');
    });

    return students;
  } catch (error) {
    console.error('Failed to fetch master students:', error);
    return [];
  }
};

export const getGraduateStudents = async (): Promise<GraduateStudent[]> => {
  const databaseId = getEnv('GRDUATE_MASTER_DB');
  const token = getEnv('DB_SECRETS');

  if (!databaseId || !token) {
    console.error('Missing environment variables for Graduate Students');
    return [];
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
      console.error('Notion API error:', await response.text());
      return [];
    }

    const data: NotionResponse = await response.json();

    const graduates = data.results.map((page) => ({
      name: page.properties.이름.title[0]?.plain_text || '',
      company: page.properties.회사.rich_text[0]?.plain_text || '',
      researchField: page.properties.연구분야.rich_text[0]?.plain_text || '',
      photo: page.properties.사진.files[0]?.file.url || '',
      year: page.properties.입학년도.number || 0,
    }));

    graduates.sort((a, b) => {
      if (a.year !== b.year) {
        return a.year - b.year;
      }
      return a.name.localeCompare(b.name, 'ko-KR');
    });

    return graduates;
  } catch (error) {
    console.error('Failed to fetch graduates:', error);
    return [];
  }
};

export const getProjects = async (): Promise<Project[]> => {
  const databaseId = getEnv('PROJECT_LIST_DB');
  const token = getEnv('DB_SECRETS');

  if (!databaseId || !token) {
    console.error('Missing environment variables for Projects');
    return [];
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
        body: JSON.stringify({
          sorts: [
            {
              property: '시작일',
              direction: 'descending',
            },
          ],
        }),
      }
    );

    if (!response.ok) {
      console.error('Notion API error:', await response.text());
      return [];
    }

    const data: NotionResponse = await response.json();

    const projects = data.results.map((page) => ({
      id: page.id,
      title: page.properties.이름.title[0]?.plain_text || '',
      backgroundColor: page.properties.배경색.rich_text[0]?.plain_text || 'FFFFFF',
      image: page.properties.대표이미지.files[0]?.file.url || '',
      company: page.properties.회사명.rich_text[0]?.plain_text || '',
      startDate: page.properties.시작일.date?.start || '',
    }));

    return projects;
  } catch (error) {
    console.error('Failed to fetch projects:', error);
    return [];
  }
};

export const getNews = async (): Promise<News[]> => {
  const databaseId = getEnv('NEWS_LIST_DB');
  const token = getEnv('DB_SECRETS');

  if (!databaseId || !token) {
    console.error('Missing environment variables for News');
    return [];
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
        body: JSON.stringify({
          sorts: [
            {
              property: '날짜',
              direction: 'descending',
            },
          ],
        }),
      }
    );

    if (!response.ok) {
      console.error('Notion API error:', await response.text());
      return [];
    }

    const data: NotionResponse = await response.json();

    const news = data.results.map((page) => ({
      id: page.id,
      title: page.properties.제목.title[0]?.plain_text || '',
      description: page.properties.설명.rich_text[0]?.plain_text || '',
      date: page.properties.날짜.date?.start || '',
      image: page.properties.대표이미지.files[0]?.file.url || null,
      link: page.properties.링크.rich_text[0]?.plain_text || '',
      tags: page.properties.태그.multi_select.map((tag: any) => tag.name),
    }));

    return news;
  } catch (error) {
    console.error('Failed to fetch news:', error);
    return [];
  }
};
