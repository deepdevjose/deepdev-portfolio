"use client";
import { useEffect, useRef, useState } from "react";

interface LazyVideoProps {
  src: string;
  poster?: string;
  className?: string;
  muted?: boolean;
  loop?: boolean;
  playsInline?: boolean;
  rootMargin?: string;
  threshold?: number;
}

/**
 * LazyVideo - Viewport-based video loading component
 * 
 * Optimizations:
 * - preload="metadata" instead of "auto" (saves ~26MB initial load)
 * - IntersectionObserver: only loads when near viewport
 * - Autoplay only when visible (saves CPU/battery)
 * - Pauses when out of viewport (reduces processing)
 * 
 * Performance impact:
 * - Before: All videos loaded immediately (~26.3 MB)
 * - After: Videos loaded on-demand (~0 MB initial, then per-video)
 */
export default function LazyVideo({
  src,
  poster,
  className,
  muted = true,
  loop = true,
  playsInline = true,
  rootMargin = "200px",
  threshold = 0.1,
}: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);

  // Intersection Observer for viewport detection
  useEffect(() => {
    if (!videoRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        
        // Start loading when approaching viewport
        if (entry.isIntersecting && !shouldLoad) {
          setShouldLoad(true);
        }
      },
      { rootMargin, threshold }
    );

    observer.observe(videoRef.current);

    return () => observer.disconnect();
  }, [rootMargin, threshold, shouldLoad]);

  // Auto-play/pause based on visibility
  useEffect(() => {
    if (!videoRef.current || !shouldLoad) return;

    if (isInView) {
      videoRef.current.play().catch(() => {
        // Auto-play was prevented, user interaction needed
        // This is expected behavior in some browsers
      });
    } else {
      videoRef.current.pause();
    }
  }, [isInView, shouldLoad]);

  return (
    <video
      ref={videoRef}
      src={shouldLoad ? src : undefined}
      poster={poster}
      className={className}
      muted={muted}
      loop={loop}
      playsInline={playsInline}
      preload={shouldLoad ? "metadata" : "none"}
      style={{ backgroundColor: "#000" }}
    />
  );
}
