import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Home from './pages/home'
import { getMasterStudents, getGraduateStudents, getProjects, getNews, getProfessors } from '../api/_lib/notion.js'

export async function render() {
  try {
    // Fetch data on the server in parallel
    const [masterStudents, graduates, projects, news, professors] = await Promise.all([
      getMasterStudents(),
      getGraduateStudents(),
      getProjects(),
      getNews(),
      getProfessors()
    ]);

    const initialData = {
      masterStudents,
      graduates,
      projects,
      news,
      professors
    };

    const html = ReactDOMServer.renderToString(
      <React.StrictMode>
        <Home initialData={initialData} />
      </React.StrictMode>
    )
    
    return { html, initialData }
  } catch (error) {
    console.error('SSR data fetching error:', error);
    // Render without data if fetching fails
    const html = ReactDOMServer.renderToString(
      <React.StrictMode>
        <Home />
      </React.StrictMode>
    )
    return { html, initialData: null }
  }
}
