// Google Analytics 유틸리티 함수
export const GA_ID = 'G-HL1K7QYTKR';

// gtag 타입 정의
declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

/**
 * Google Analytics 페이지뷰 이벤트 전송
 * @param pageTitle - 페이지 제목
 * @param pagePath - 페이지 경로 (선택, 기본값: 현재 경로)
 */
export const trackPageView = (pageTitle: string, pagePath?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'page_view', {
      page_title: pageTitle,
      page_location: window.location.href,
      page_path: pagePath || window.location.pathname,
    });
  }
};

/**
 * Google Analytics 커스텀 이벤트 전송
 * @param eventName - 이벤트 이름
 * @param eventParams - 이벤트 파라미터
 */
export const trackEvent = (eventName: string, eventParams?: Record<string, unknown>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
};
