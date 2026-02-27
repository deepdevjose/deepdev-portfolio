/**
 * Lenis Singleton Instance
 * 
 * CRITICAL: Only ONE Lenis instance should exist across the entire app
 * Multiple instances cause:
 * - Conflicting scroll engines
 * - RAF loops accumulation
 * - High CPU consumption
 * - Memory leaks
 * 
 * Usage:
 * - LenisProvider in layout.tsx manages the lifecycle
 * - Components should NOT create their own Lenis instances
 * - Use getLenis() if direct access is needed
 */
import Lenis from 'lenis'

let lenis: Lenis | null = null

export const getLenis = () => {
  if (!lenis) {
    lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })
  }

  return lenis
}
