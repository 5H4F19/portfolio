
import { useEffect, useState } from 'react';

export function useElementAvailable(
  selector: string,
  rootElement: HTMLElement | null
): boolean {
  const [elementAvailable, setElementAvailable] = useState(false);

  useEffect(() => {
    const observer = new MutationObserver((mutationsList) => {
      for (let mutation of mutationsList) {
        if (mutation.type === 'childList') {
          const element = rootElement?.querySelector(selector);
          if (element) {
            setElementAvailable(true);
            observer.disconnect(); // Stop observing once found
            break;
          }
        }
      }
    });

    if (rootElement) {
      observer.observe(rootElement, { childList: true, subtree: true });
    }

    return () => {
      observer.disconnect();
    };
  }, [selector, rootElement]);

  return elementAvailable;
}
