import { useEffect, useRef } from 'react';

interface ScrollFloatProps {
  children: React.ReactNode;
  className?: string;
}

export const ScrollFloat: React.FC<ScrollFloatProps> = ({ 
  children, 
  className = ''
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion || !containerRef.current) {
      return;
    }

    const container = containerRef.current;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const elementTop = rect.top;
      const elementHeight = rect.height;
      const elementCenter = elementTop + elementHeight / 2;
      const viewportCenter = windowHeight / 2;
      
      const distance = elementCenter - viewportCenter;
      
      const maxDistance = windowHeight;
      const translateY = (distance / maxDistance) * -100;
      
      container.style.transform = `translateY(${translateY}px)`;
    };

    let rafId: number;
    const onScroll = () => {
      rafId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className={`scroll-float ${className}`}
      style={{ willChange: 'transform' }}
    >
      {children}
    </div>
  );
};

export default ScrollFloat;
