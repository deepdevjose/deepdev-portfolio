'use client';
import style from "./landing.module.css";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// Lazy load Wallpaper (shaders son pesados ~50KB)
// Fallback: fondo simple durante carga
const Wallpaper = dynamic(() => import("../wallpaper/wallpaper"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 m-3 rounded-[29px] bg-gradient-to-br from-[#121212] via-[#1A1A1A] to-[#581c87] dark:from-[#121212] dark:to-[#581c87] light:from-[#ffffff] light:to-[#8b5cf6]" />,
});

export default function Landing() {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date());
        }, 1000); // update every second
        return () => clearInterval(interval); // cleanup
    }, []);
    return (
        <div className={style.landing}>
            <Wallpaper />
            <div className={style.text}>
                <h1>
                    Complexity demands precision.
                </h1>
                {/* {date.toLocaleTimeString()} */}
            </div>
        </div>
    );
}
