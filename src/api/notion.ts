import type { MasterStudent, GraduateStudent, Project, News } from '../types/notion';

const API_ENDPOINT = '/api/notion/students';
const GRADUATES_API_ENDPOINT = '/api/notion/graduates';
const PROJECTS_API_ENDPOINT = '/api/notion/projects';
const NEWS_API_ENDPOINT = '/api/notion/news';

export const fetchMasterStudents = async (): Promise<MasterStudent[]> => {
  try {
    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('API error:', errorData);
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();
    return data.students || [];
  } catch (error) {
    console.error('Failed to fetch master students:', error);
    return [];
  }
};

export const fetchGraduateStudents = async (): Promise<GraduateStudent[]> => {
  try {
    const response = await fetch(GRADUATES_API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('API error:', errorData);
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();
    return data.graduates || [];
  } catch (error) {
    console.error('Failed to fetch graduate students:', error);
    return [];
  }
};

export const fetchProjects = async (): Promise<Project[]> => {
  try {
    const response = await fetch(PROJECTS_API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('API error:', errorData);
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();
    return data.projects || [];
  } catch (error) {
    console.error('Failed to fetch projects:', error);
    return [];
  }
};

export const fetchNews = async (): Promise<News[]> => {
  try {
    const response = await fetch(NEWS_API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('API error:', errorData);
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();
    return data.news || [];
  } catch (error) {
    console.error('Failed to fetch news:', error);
    return [];
  }
};
