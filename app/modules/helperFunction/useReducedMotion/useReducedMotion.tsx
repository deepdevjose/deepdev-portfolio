import { useEffect, useState } from "react";

/**
 * Hook para detectar si debemos reducir animaciones
 * 
 * Detecta:
 * - prefers-reduced-motion (accesibilidad)
 * - Dispositivos móviles (menor capacidad de procesamiento)
 * - Conexión lenta (save-data)
 * 
 * Retorna true si debemos REDUCIR/DESACTIVAR animaciones pesadas
 * 
 * @example
 * ```tsx
 * const shouldReduce = useReducedMotion();
 * 
 * // En un componente con AnimatedContent
 * <AnimatedContent disabled={shouldReduce} ... />
 * 
 * // Con Framer Motion
 * <motion.div
 *   animate={{ x: shouldReduce ? 0 : 100 }}
 *   transition={{ duration: shouldReduce ? 0 : 0.5 }}
 * />
 * ```
 */
export default function useReducedMotion() {
  // Inicializar en false para SSR (desktop-first)
  const [shouldReduce, setShouldReduce] = useState(false);

  useEffect(() => {
    // Detectar prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    
    // Detectar móvil (asumimos que window.innerWidth < 1024 es móvil/tablet)
    const isMobile = window.innerWidth < 1024;
    
    // Detectar conexión lenta (save-data)
    const connection = (navigator as any).connection;
    const slowConnection = connection?.saveData || connection?.effectiveType === 'slow-2g' || connection?.effectiveType === '2g';
    
    const shouldReduceMotion = mediaQuery.matches || isMobile || slowConnection;
    setShouldReduce(shouldReduceMotion);

    // Listener para cambios en prefers-reduced-motion
    const handleChange = () => {
      setShouldReduce(mediaQuery.matches || window.innerWidth < 1024);
    };

    mediaQuery.addEventListener("change", handleChange);
    window.addEventListener("resize", handleChange);
    
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
      window.removeEventListener("resize", handleChange);
    };
  }, []);

  return shouldReduce;
}
