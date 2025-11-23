import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './pages/home'

// @ts-ignore
const initialData = window.__INITIAL_DATA__;

ReactDOM.hydrateRoot(document.getElementById('root')!,
  <React.StrictMode>
    <Home initialData={initialData} />
  </React.StrictMode>
)
