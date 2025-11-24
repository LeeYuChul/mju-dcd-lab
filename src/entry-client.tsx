import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './pages/home'

// Google Analytics Injection
const GA_ID = 'G-HL1K7QYTKR';
if (typeof window !== 'undefined') {
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);

  // @ts-ignore
  window.dataLayer = window.dataLayer || [];
  // @ts-ignore
  function gtag(){window.dataLayer.push(arguments);}
  // @ts-ignore
  gtag('js', new Date());
  // @ts-ignore
  gtag('config', GA_ID);
}

// @ts-ignore
const initialData = window.__INITIAL_DATA__;

ReactDOM.hydrateRoot(document.getElementById('root')!,
  <React.StrictMode>
    <Home initialData={initialData} />
  </React.StrictMode>
)
