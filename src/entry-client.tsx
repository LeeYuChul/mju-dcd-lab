import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './pages/home'

// Google Analytics Injection
import { GA_ID } from './utils/analytics';

if (typeof window !== 'undefined') {
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer.push(args);
  };
  window.gtag('js', new Date());
  // 자동 페이지뷰 비활성화 - 수동으로 전송
  window.gtag('config', GA_ID, { send_page_view: false });
}

// @ts-ignore
const initialData = window.__INITIAL_DATA__;

ReactDOM.hydrateRoot(document.getElementById('root')!,
  <React.StrictMode>
    <Home initialData={initialData} />
  </React.StrictMode>
)
