"use client";
import dynamic from "next/dynamic";
import LazySection from "../helperFunction/lazySection/LazySection";

/**
 * DynamicSections - Client component wrapper for dynamic below-fold imports
 * 
 * This component must be a Client Component to use next/dynamic with ssr: false
 * Strategy: Dynamic imports + Viewport-based lazy rendering
 * - Reduces initial JS bundle (code splitting)
 * - Defers hydration until component is needed
 * - Only renders when section enters viewport
 */

const AboutMe = dynamic(() => import("../userDefined/aboutme/aboutme"), {
  ssr: false,
});
const Skills = dynamic(() => import("../userDefined/skills/skills"), {
  ssr: false,
});
const Projects = dynamic(() => import("../userDefined/projects/projects"), {
  ssr: false,
});
const Education = dynamic(() => import("../userDefined/education/education"), {
  ssr: false,
});
const Blogs = dynamic(() => import("../userDefined/blogs/blogs"), {
  ssr: false,
});
const ContactMe = dynamic(() => import("../userDefined/contactme/contactMe"), {
  ssr: false,
});

export default function DynamicSections() {
  return (
    <>
      {/* BELOW-FOLD SECTIONS - Viewport-based lazy loading */}
      <LazySection id="about" rootMargin="100px">
        <AboutMe />
      </LazySection>

      <LazySection id="skill" style={{ overflow: "hidden" }} rootMargin="100px">
        <Skills />
      </LazySection>

      <LazySection id="project" rootMargin="100px">
        <Projects />
      </LazySection>

      <LazySection id="education" rootMargin="100px">
        <Education />
      </LazySection>

      <LazySection id="blogs" rootMargin="100px">
        <Blogs />
      </LazySection>

      <LazySection id="contact" rootMargin="100px">
        <ContactMe />
      </LazySection>

      <div className="text-center text-[0.8rem] font-bold leading-[1.2rem] text-[#818181] dark:text-[#4f4f4f]">
        <p>
          &copy; 2026 — José Manuel Cortés Cerón
        </p>
      </div>
    </>
  );
}
