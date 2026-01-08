'use client'
import style from "./contactMe.module.css"
import { useRef, useEffect } from 'react';
import ContactBtn from "../buttons/contactbtn/contactBtn";

export default function ContactMe() {
    const path = useRef(null);

    const progressRef = useRef(0);
    const xRef = useRef(0.1);
    const timeRef = useRef(Math.PI / 2);
    const reqIdRef = useRef(null);

    useEffect(() => {
        setPath(progressRef.current);

        const onResize = () => setPath(progressRef.current);
        window.addEventListener('resize', onResize);

        return () => {
            window.removeEventListener('resize', onResize);
            if (reqIdRef.current) cancelAnimationFrame(reqIdRef.current);
        };
    }, []);

    const setPath = (progress) => {
        if (!path.current) return;

        const svgEl = path.current.ownerSVGElement;
        if (!svgEl) return;

        const svgWidth = svgEl.clientWidth;
        const pathWidth = svgWidth * 1;
        const offset = (svgWidth - pathWidth) / 2;

        const cx = offset + pathWidth * xRef.current;
        const startX = offset;
        const endX = offset + pathWidth;

        path.current.setAttributeNS(
            null,
            "d",
            `M${startX} 250 Q${cx} ${250 + progress}, ${endX} 250`
        );
    };

    const lerp = (a, b, t) => a * (1 - t) + b * t;

    const manageMouseEnter = () => {
        if (reqIdRef.current) {
            cancelAnimationFrame(reqIdRef.current);
            resetAnimation();
        }
    };

    const manageMouseMove = (e) => {
        const { movementY, clientX } = e;
        if (!path.current) return;

        const svgEl = path.current.ownerSVGElement;
        if (!svgEl) return;

        const svgRect = svgEl.getBoundingClientRect();
        const svgWidth = svgRect.width;
        const pathWidth = svgWidth * 0.7;
        const offset = (svgWidth - pathWidth) / 2;

        let newX = (clientX - svgRect.left - offset) / pathWidth;
        newX = Math.max(0, Math.min(1, newX));
        xRef.current = newX;

        progressRef.current += movementY;
        setPath(progressRef.current);
    };

    const manageMouseLeave = () => {
        animateOut();
    };

    const animateOut = () => {
        const newProgress = progressRef.current * Math.sin(timeRef.current);
        progressRef.current = lerp(progressRef.current, 0, 0.025);
        timeRef.current += 0.2;
        setPath(newProgress);

        if (Math.abs(progressRef.current) > 0.75) {
            reqIdRef.current = requestAnimationFrame(animateOut);
        } else {
            resetAnimation();
        }
    };

    const resetAnimation = () => {
        timeRef.current = Math.PI / 2;
        progressRef.current = 0;
        setPath(0);
    };

    return (
        <div className={style.contact}>
            <div className={style.line}>
                <div
                    onMouseEnter={() => { manageMouseEnter() }}
                    onMouseMove={(e) => { manageMouseMove(e) }}
                    onMouseLeave={() => { manageMouseLeave() }}
                    className={style.box}
                ></div>
                <svg>
                    <path ref={path}></path>
                </svg>
            </div>

            <div className={style.head}>
                <div>

                    <p>Got a project in mind?</p>
                    <h1>Let's Talk</h1>
                </div>
                <div className={style.socialFlex}>

                    <div className="flex flex-col">
                        <ContactBtn label='deepdevjose@itsoeh.edu.mx' onClick={() => { window.open("mailto:deepdevjose@itsoeh.edu.mx", '_blank') }} primary />
                        <ContactBtn label='Github' onClick={() => { window.open("https://github.com/deepdevjose", '_blank') }} />
                    </div>
                    <div className="flex flex-col">
                        <ContactBtn label='LinkedIn' onClick={() => { window.open("https://www.linkedin.com/in/deepdevjose/", '_blank') }} />
                        <ContactBtn label='Instagram' onClick={() => { window.open("https://www.instagram.com/deepdevjose/", '_blank') }} />

                    </div>
                </div>
            </div>
        </div>
    );
}
