import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Disable any smooth scrolling behavior
    const originalStyle = window.getComputedStyle(document.documentElement).scrollBehavior;
    document.documentElement.style.scrollBehavior = 'auto';
    
    // Force scroll to top
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto' // Force instant scroll
    });
    
    // Also try these for cross-browser compatibility
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // Restore original scroll behavior after a short delay
    const timer = setTimeout(() => {
      document.documentElement.style.scrollBehavior = originalStyle;
    }, 100);
    
    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
