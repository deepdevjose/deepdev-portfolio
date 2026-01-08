"use client";
import { useEffect, useState } from "react";
import ToggleTheme from "./modules/theme/toggleTheme";
import Projects from "./modules/userDefined/projects/projects";
import Skills from "./modules/userDefined/skills/skills";
import NavBar from "./modules/userDefined/navbar/navbar";
import Landing from "./modules/userDefined/landing/landing";
import AboutMe from "./modules/userDefined/aboutme/aboutme";
import Tooltip from "./modules/userDefined/toolTip/toolTip";
import ContactMe from "./modules/userDefined/contactme/contactMe";
import Education from "./modules/userDefined/education/education";
import Blogs from "./modules/userDefined/blogs/blogs";



export default function Home() {
  const [showRest, setShowRest] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowRest(true);
    }, 100); // Delay rendering of below-fold sections

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <NavBar />
      <div id="home"><Landing /></div>

      {/* BELOW-FOLD COMPONENTS */}
      <div className={`transition-opacity duration-300 ease-in ${showRest ? 'opacity-100' : 'opacity-0'}`}>

        <div id="about"><AboutMe /></div>
        <div id="skill" style={{ overflow: "hidden" }}><Skills /></div>
        <div id="project"><Projects /></div>
        <div id="education"><Education /></div>
        <div id="blogs"><Blogs /></div>
        <div id="contact"><ContactMe /></div>
        <div className="text-center text-[0.8rem] font-bold leading-[1.2rem] text-[#818181] dark:text-[#4f4f4f]">
          <p>
            &copy; 2026 — José Manuel Cortés Cerón
          </p>
        </div>
      </div>
    </>
  );
}

