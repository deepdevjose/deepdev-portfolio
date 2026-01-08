// lib/lenisInstance.ts
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
