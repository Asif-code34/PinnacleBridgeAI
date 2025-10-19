import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Smooth scroll to top when route changes
    const smoothScrollToTop = () => {
      const startY = window.pageYOffset;
      const startTime = performance.now();
      const duration = 600; // 600ms for smooth scroll

      const animateScroll = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation
        const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
        const easedProgress = easeOutCubic(progress);
        
        const currentY = startY * (1 - easedProgress);
        window.scrollTo(0, currentY);
        
        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        }
      };

      // Only scroll if not already at top
      if (startY > 0) {
        requestAnimationFrame(animateScroll);
      }
    };

    // Small delay to allow page transition to start
    const timer = setTimeout(smoothScrollToTop, 100);
    
    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
