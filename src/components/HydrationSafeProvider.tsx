'use client';

import { useEffect } from 'react';

export function HydrationSafeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // This runs only on the client after hydration
    // It can help prevent issues with browser extensions
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.target === document.documentElement) {
          // Browser extension may have modified the html element
          // We can log this but not throw errors
          console.log('HTML element attributes modified after hydration');
        }
      });
    });

    // Start observing after a short delay to avoid initial hydration issues
    setTimeout(() => {
      observer.observe(document.documentElement, {
        attributes: true,
        attributeOldValue: true
      });
    }, 100);

    return () => observer.disconnect();
  }, []);

  return <>{children}</>;
}
