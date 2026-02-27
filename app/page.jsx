import NavBar from "./modules/userDefined/navbar/navbar";
import Landing from "./modules/userDefined/landing/landing";
import DynamicSections from "./modules/dynamicSections/DynamicSections";

/**
 * Home page - Server Component with optimized below-fold strategy
 * 
 * Above-fold: NavBar + Landing (immediate render)
 * Below-fold: DynamicSections (client component with lazy + viewport-based loading)
 * 
 * Performance strategy:
 * - Server Component reduces initial hydration cost
 * - Dynamic imports split code into separate chunks
 * - Viewport-based rendering defers load until needed
 * - Result: Massive TTI/INP improvement
 */
export default function Home() {
  return (
    <>
      <NavBar />
      <div id="home"><Landing /></div>
      <DynamicSections />
    </>
  );
}

