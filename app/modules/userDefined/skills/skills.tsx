'use client';
import {
    CppIcon,
    JavaScriptIcon,
    TypeScriptIcon,
    ReactJsIcon,
    NextJsIcon,
    NodeJsIcon,
    MySqlIcon,
    GitIcon,
    GithubIcon,
} from "@/app/customIcon";
import style from "./skills.module.css"
import { ArrowLine } from "@/app/customIcon";

export default function Skills() {

    const extendedStack = [
        "Python", "Linux", "Docker", "Firebase",
        "Arduino", "ESP32", "MQTT", "Three.js", "WebGL",
        "LSTM Networks", "Signal Processing"
    ];

    return (
        <div className={style.skillsContainer}>

            <div className={style.titleMain}>
                <ArrowLine width="4rem" />
                <h1>Technologies I Ship With</h1>
            </div>

            {/* CORE STACK - The Identity */}
            <div className={style.sectionGroup}>
                <span className={style.categoryLabel}>Core Technologies</span>
                <div className={style.coreGrid}>
                    <TechCard icon={<CppIcon height="100%" />} label="C++" />
                    <TechCard icon={<TypeScriptIcon height="100%" />} label="TypeScript" />
                    <TechCard icon={<NextJsIcon height="100%" />} label="Next.js" />
                    <TechCard icon={<ReactJsIcon height="100%" />} label="React" />
                    <TechCard icon={<NodeJsIcon height="100%" />} label="Node.js" />
                    <TechCard icon={<MySqlIcon height="100%" />} label="MySQL" />
                    <TechCard icon={<GitIcon height="100%" />} label="Git" />
                    <TechCard icon={<GithubIcon height="100%" className="text-black dark:text-white" />} label="GitHub" />
                </div>
            </div>

            {/* EXTENDED STACK - The Background */}
            <div className={style.sectionGroup}>
                <span className={style.categoryLabel}>Broader Ecosystem & Tooling</span>
                <div className={style.chipContainer}>
                    {extendedStack.map((tech, index) => (
                        <div key={index} className={style.techChip}>
                            {tech}
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}

function TechCard({ icon, label }: { icon: React.ReactNode; label: string }) {
    return (
        <div className={style.coreCard}>
            <div className={style.iconWrapper}>
                {icon}
            </div>
            <span className={style.cardLabel}>{label}</span>
        </div>
    )
}
