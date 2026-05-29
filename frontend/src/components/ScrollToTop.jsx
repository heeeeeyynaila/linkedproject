import { useEffect } from 'react';
import { useLocation } from 'react-router';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll the window to top
    window.scrollTo(0, 0);

    // Also check for any scrollable containers inside our layouts
    const scrollContainers = document.querySelectorAll('.overflow-y-auto, main');
    scrollContainers.forEach(container => {
      container.scrollTop = 0;
    });
  }, [pathname]);

  return null;
}
