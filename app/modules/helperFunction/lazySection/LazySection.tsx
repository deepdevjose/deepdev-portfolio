"use client";
import { useEffect, useRef, useState } from "react";

interface LazySectionProps {
  children: React.ReactNode;
  rootMargin?: string;
  threshold?: number;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
}

/**
 * Viewport-based lazy loading wrapper
 * Only renders children when section enters viewport
 * Significantly reduces initial hydration cost
 */
export default function LazySection({
  children,
  rootMargin = "200px",
  threshold = 0.01,
  className,
  id,
  style,
}: LazySectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [rootMargin, threshold]);

  return (
    <div ref={ref} className={className} id={id} style={style}>
      {isVisible ? children : null}
    </div>
  );
}
