"use client";
import { useEffect, useState } from "react";

interface BelowFoldContentProps {
  children: React.ReactNode;
  delay?: number;
}

/**
 * Client component that delays rendering of below-fold content
 * to improve initial page load performance (TTI/INP)
 */
export default function BelowFoldContent({ 
  children, 
  delay = 100 
}: BelowFoldContentProps) {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowContent(true);
    }, delay);

    return () => clearTimeout(timeout);
  }, [delay]);

  return (
    <div className={`transition-opacity duration-300 ease-in ${showContent ? 'opacity-100' : 'opacity-0'}`}>
      {children}
    </div>
  );
}
