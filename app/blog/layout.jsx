'use client';

import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useRef, useEffect } from 'react';

// Dynamic import with SSR disabled
const GlassSurface = dynamic(
    () => import('@/components/Components/GlassSurface/GlassSurface'),
    { ssr: false }
);

// Animated line component for footer
function AnimatedLine() {
    const path = useRef(null);
    const progressRef = useRef(0);
    const xRef = useRef(0.5);
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
        path.current.setAttributeNS(null, "d", `M${startX} 250 Q${cx} ${250 + progress}, ${endX} 250`);
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

    const manageMouseLeave = () => animateOut();

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
        <div style={{ height: '1px', marginBottom: '10px', width: '100%', position: 'relative' }}>
            <div
                onMouseEnter={manageMouseEnter}
                onMouseMove={manageMouseMove}
                onMouseLeave={manageMouseLeave}
                style={{
                    height: '40px',
                    width: '100%',
                    position: 'relative',
                    top: '-20px',
                    zIndex: 1,
                    margin: '0 auto'
                }}
            />
            <svg style={{ width: '100%', height: '500px', position: 'absolute', top: '-250px', pointerEvents: 'none' }}>
                <path ref={path} style={{ stroke: 'var(--text)', strokeWidth: '2px', fill: 'none', opacity: 0.5 }} />
            </svg>
        </div>
    );
}

export default function BlogLayout({ children }) {
    return (
        <>
            <main>
                {children}
            </main>

            {/* Footer with Animated Line */}
            <footer style={{
                maxWidth: '1000px',
                width: '95%',
                margin: '0 auto',
                paddingTop: '150px',
                paddingBottom: '50px'
            }}>
                <AnimatedLine />

                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '24px',
                    marginTop: '30px',
                    marginBottom: '20px',
                    flexWrap: 'wrap'
                }}>
                    <a href="mailto:deepdevjose@itsoeh.edu.mx" style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textDecoration: 'none' }}>
                        deepdevjose@itsoeh.edu.mx
                    </a>
                    <a href="https://github.com/deepdevjose" target="_blank" style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textDecoration: 'none' }}>
                        GitHub
                    </a>
                    <a href="https://linkedin.com/in/deepdevjose" target="_blank" style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textDecoration: 'none' }}>
                        LinkedIn
                    </a>
                </div>

                <p style={{
                    textAlign: 'center',
                    color: 'var(--text-muted)',
                    fontSize: '0.8rem',
                    opacity: 0.6
                }}>
                    © 2026 — José Manuel Cortés Cerón
                </p>
            </footer>
        </>
    );
}
