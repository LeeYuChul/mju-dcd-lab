import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Home from './pages/home'

export async function render() {
  // Render without data to show loading screen immediately
  // Data will be fetched on the client side
  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
      <Home />
    </React.StrictMode>
  )
  
  return { html, initialData: null }
}
