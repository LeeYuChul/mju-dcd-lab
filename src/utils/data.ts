let dataPromise: Promise<any> | null = null;

export function getDataPromise() {
  if (typeof window === 'undefined') {
    return null; // Server handles data differently
  }

  if (dataPromise) return dataPromise;

  // @ts-ignore
  if (window.__INITIAL_DATA__) {
    // @ts-ignore
    return Promise.resolve(window.__INITIAL_DATA__);
  }

  dataPromise = new Promise((resolve, reject) => {
    let attempts = 0;
    const maxAttempts = 100; // 5 seconds timeout
    
    const check = () => {
      attempts++;
      // @ts-ignore
      if (window.__INITIAL_DATA__) {
        // @ts-ignore
        resolve(window.__INITIAL_DATA__);
      } else if (attempts >= maxAttempts) {
        // Timeout - resolve with null so client can fallback to API calls
        resolve(null);
      } else {
        setTimeout(check, 50);
      }
    };
    check();
  });

  return dataPromise;
}
