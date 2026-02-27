/*
	Installed from https://reactbits.dev/ts/tailwind/
*/

import React, { useRef, useEffect, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedContentProps {
  children: ReactNode;
  distance?: number;
  direction?: "vertical" | "horizontal";
  reverse?: boolean;
  duration?: number;
  ease?: string | ((progress: number) => number);
  initialOpacity?: number;
  animateOpacity?: boolean;
  scale?: number;
  threshold?: number;
  delay?: number;
  onComplete?: () => void;
  disabled?: boolean; // Nueva prop para desactivar animaciones
}

const AnimatedContent: React.FC<AnimatedContentProps> = ({
  children,
  distance = 100,
  direction = "vertical",
  reverse = false,
  duration = 0.8,
  ease = "power3.out",
  initialOpacity = 0,
  animateOpacity = true,
  scale = 1,
  threshold = 0.1,
  delay = 0,
  onComplete,
  disabled = false,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Si las animaciones están desactivadas, mostrar contenido inmediatamente
    if (disabled) {
      const el = ref.current;
      if (el) {
        gsap.set(el, { x: 0, y: 0, scale: 1, opacity: 1 });
      }
      return;
    }

    const el = ref.current;
    if (!el) return;

    const axis = direction === "horizontal" ? "x" : "y";
    const offset = reverse ? -distance : distance;
    const startPct = (1 - threshold) * 100;

    gsap.set(el, {
      [axis]: offset,
      scale,
      opacity: animateOpacity ? initialOpacity : 1,
      // Optimización: añadir will-change solo durante animación
      willChange: "transform, opacity",
    });

    const animation = gsap.to(el, {
      [axis]: 0,
      scale: 1,
      opacity: 1,
      duration,
      ease,
      delay,
      onComplete: () => {
        // Remover will-change después de animación
        gsap.set(el, { willChange: "auto" });
        onComplete?.();
      },
      scrollTrigger: {
        trigger: el,
        start: `top ${startPct}%`,
        toggleActions: "play none none none",
        once: true,
      },
    });

    return () => {
      // Cleanup mejorado
      animation.scrollTrigger?.kill();
      animation.kill();
      if (el) {
        gsap.set(el, { willChange: "auto" });
      }
    };
  }, [
    distance,
    direction,
    reverse,
    duration,
    ease,
    initialOpacity,
    animateOpacity,
    scale,
    threshold,
    delay,
    onComplete,
    disabled,
  ]);

  return <div ref={ref}>{children}</div>;
};

export default AnimatedContent;
