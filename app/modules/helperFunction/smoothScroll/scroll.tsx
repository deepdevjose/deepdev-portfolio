'use client'

/**
 * LenisProvider - Global Smooth Scroll Manager (Deferred Loading)
 * 
 * Wraps the entire app in layout.tsx
 * Performance optimization: Defers Lenis initialization until after first paint
 * - Waits for window.load event (or 2s timeout)
 * - Reduces initial bundle blocking
 * - Prioritizes FCP/LCP over smooth scroll
 * 
 * IMPORTANT: Components should NOT create their own Lenis instances
 * This provider ensures only one scroll engine runs across the app
 */
import { useEffect, useState } from 'react'

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  const [lenisReady, setLenisReady] = useState(false)

  useEffect(() => {
    // Defer Lenis loading until page is loaded or 2 seconds have passed
    let mounted = true
    
    const initLenis = async () => {
      if (!mounted) return
      
      // Dynamic import - only load Lenis when needed
      const { getLenis } = await import('./lenisInstance')
      if (!mounted) return
      
      const lenis = getLenis()
      setLenisReady(true)

      let rafId: number
      const raf = (time: number) => {
        lenis.raf(time)
        rafId = requestAnimationFrame(raf)
      }

      rafId = requestAnimationFrame(raf)

      // Cleanup: Cancel RAF loop and destroy instance
      return () => {
        cancelAnimationFrame(rafId)
        lenis.destroy()
      }
    }

    // Wait for page load OR 2 seconds (whichever comes first)
    const loadTimeout = setTimeout(() => {
      initLenis()
    }, 2000)

    const handleLoad = () => {
      clearTimeout(loadTimeout)
      initLenis()
    }

    if (document.readyState === 'complete') {
      // Already loaded
      clearTimeout(loadTimeout)
      initLenis()
    } else {
      window.addEventListener('load', handleLoad)
    }

    return () => {
      mounted = false
      clearTimeout(loadTimeout)
      window.removeEventListener('load', handleLoad)
    }
  }, [])

  return <>{children}</>
}
