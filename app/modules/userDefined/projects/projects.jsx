'use client';
import styles from './projects.module.css'
import { projects } from './data';
import Card from './Card/card';
import { useScroll } from 'framer-motion';
import { useRef } from 'react';
import Button from '../buttons/projectbtn/button2';

/**
 * Projects component - uses global Lenis instance from LenisProvider
 * No local Lenis needed - prevents double scroll engine and RAF leaks
 */
export default function Projects() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  return (
    <>

      <main ref={container} className={styles.main}>
        <div className={styles.projectHead}>

          <h1>Selected Works</h1>
        </div>
        {
          projects.map((project, i) => {
            const targetScale = 1 - ((projects.length - i) * 0.05);
            return <Card key={`p_${i}`} i={i} {...project} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale} />
          })
        }
      </main>
    </>
  )
}
