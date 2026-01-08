'use client'
import { motion, AnimatePresence } from 'framer-motion';
import styles from './popUp.module.css';
// PDF imports removed for lightweight build
// import { Viewer, Worker, SpecialZoomLevel } from '@react-pdf-viewer/core';
// import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
// import '@react-pdf-viewer/core/lib/styles/index.css';
// import '@react-pdf-viewer/default-layout/lib/styles/index.css';
// import { useTheme } from 'next-themes';
import { CrossIcon, ArrowCurved } from '@/app/customIcon';
import { useState } from 'react';
// import Image from 'next/image';




export default function Popup({ isOpen, onClose }) {
    // const defaultLayoutPluginInstance = defaultLayoutPlugin();

    // const { resolvedTheme } = useTheme();
    const [isLoading, setIsLoading] = useState(true);
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className={styles.overlay}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        className={styles.modal}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >

                        <div className={styles.Btnsheader}>

                            <a className={styles.downloadBtn} href='/CV_English_.pdf' download>
                                <div className={styles.arr1}><ArrowCurved /></div>
                                <div className={styles.arr2}><ArrowCurved /></div>

                            </a>
                            <button className={styles.closeBtn} onClick={onClose}>
                                <CrossIcon />
                            </button>
                        </div>



                        <div className={styles.pdfViewer}>
                            {isLoading && <div className={styles.loader}></div>}
                            {/* <Worker  workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.js">
                                <Viewer
                                    fileUrl='/CV_English_.pdf'
                                    // plugins={[defaultLayoutPluginInstance]}
                                    defaultScale={SpecialZoomLevel.PageFit}
                                    theme={resolvedTheme}
                                />
                            </Worker> */}
                            <img
                                src="/resume_preview.jpg"
                                alt="Resume"
                                onLoad={() => setIsLoading(false)}
                            />
                        </div>





                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}