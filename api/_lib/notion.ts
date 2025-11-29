import type { MasterStudent, GraduateStudent, Project, News, Professor } from '../types/notion.js';

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
      department: page.properties.학과.rich_text[0]?.plain_text || '',
      photo: page.properties.사진.files[0]?.file.url || '',
      graduationYear: page.properties.졸업년도.number || 0,
    }));

    graduates.sort((a, b) => {
      if (a.graduationYear !== b.graduationYear) {
        return a.graduationYear - b.graduationYear;
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

export const getProfessors = async (): Promise<Professor[]> => {
  const databaseId = getEnv('PROFESSER_LIST_DB');
  const token = getEnv('DB_SECRETS');

  if (!databaseId || !token) {
    console.error('Missing environment variables for Professors');
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

    const professors = data.results.map((page) => {
      // 소속 및 직책을 줄바꿈으로 분리
      const positionText = page.properties['소속 및 직책']?.rich_text[0]?.plain_text || '';
      const positionLines = positionText.split('\n').filter((line: string) => line.trim());
      
      // 대표 경력을 줄바꿈으로 분리
      const summaryText = page.properties['대표 경력(3줄)']?.rich_text[0]?.plain_text || '';
      const summaryLines = summaryText.split('\n').filter((line: string) => line.trim());
      
      // 상세 경력을 줄바꿈으로 분리
      const detailsText = page.properties['상세 경력']?.rich_text[0]?.plain_text || '';
      const detailsLines = detailsText.split('\n').filter((line: string) => line.trim());

      return {
        name: page.properties['이름(한글)']?.title[0]?.plain_text || '',
        nameEn: page.properties['이름(영문)']?.rich_text[0]?.plain_text || '',
        position: positionLines[1] || '', // 두번째 줄이 직책
        department: positionLines[0] || '', // 첫번째 줄이 소속
        summary: summaryLines,
        details: detailsLines,
        photo: page.properties.사진?.files[0]?.file?.url || '',
        order: page.properties['순서']?.number || 999,
      };
    });

    // 순서 오름차순 정렬
    professors.sort((a, b) => a.order - b.order);

    // order 필드 제거 후 반환
    return professors.map(({ order, ...rest }) => rest);
  } catch (error) {
    console.error('Failed to fetch professors:', error);
    return [];
  }
};
