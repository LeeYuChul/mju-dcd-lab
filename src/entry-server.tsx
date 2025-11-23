import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Home from './pages/home'
import { getMasterStudents, getGraduateStudents, getProjects, getNews } from './services/notion'

export async function render() {
  // Fetch data on the server
  const [masterStudents, graduates, projects, news] = await Promise.all([
    getMasterStudents(),
    getGraduateStudents(),
    getProjects(),
    getNews()
  ]);

  const initialData = {
    masterStudents,
    graduates,
    projects,
    news
  };

  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
      <Home initialData={initialData} />
    </React.StrictMode>
  )
  
  return { html, initialData }
}
