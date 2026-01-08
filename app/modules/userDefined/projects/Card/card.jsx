'use client'
import styles from './card.module.css';
import { useTransform, motion, useScroll, number } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Button from '../../buttons/projectbtn/button';
import Label from '../../buttons/labels/label';
import Marquee from "react-fast-marquee";
import useWindowWidth from '../../../helperFunction/getwidth/getWidth';


const Card = ({ i, title, description, video, videoCaption, videoOverlay, ldesc, marquee1, marquee2, num, liveLink, github, tech1, tech2, tech3, tech4, tech5, itech1, itech2, itech3, itech4, itech5, color, progress, range, targetScale }) => {
  const windowWidth = useWindowWidth();
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
  const scale = useTransform(progress, range, [1, targetScale]);



  return (
    <div ref={container} className={styles.cardContainer}>
      <motion.div
        style={{ backgroundColor: color, scale, top: `calc(-5vh + ${i * 25}px)` }}
        className={styles.card}
      >
        <div className={styles.cardBody}>




          <div className={styles.titlebtnContainer}>
            <div className='flex'>
              <h1>{num}</h1>
              <div className={styles.titleContainer}>
                <h2>{title}</h2>
                <h3>{description}</h3>
              </div>
            </div>

            <div className={styles.btnContainer}>
              <Button label='Github' onClick={() => { window.open(github, '_blank') }} />
              <div style={{ height: '5px' }}></div>
              <Button label='Live' onClick={() => { window.open(liveLink, '_blank') }} />

            </div>

          </div>




          <div className={styles.outerBox}>
            <div className={styles.VideoBox}>
              <motion.div
                className={styles.inner}
                style={{ scale: imageScale }}
              >
                <video
                  src={video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  className={styles.videoPlay}

                />
                {videoOverlay && (
                  <div className={styles.videoOverlay}>
                    <span className={styles.overlayText}>{videoOverlay}</span>
                  </div>
                )}
              </motion.div>
              {videoCaption && (
                <div className={styles.videoCaption} style={{ backgroundColor: color }}>{videoCaption}</div>
              )}
            </div>
            <div className={styles.sideBox}>

              <div className={styles.box1}>
                <div className={styles.ldesc}>


                  {ldesc}
                </div>
                <div className='flex flex-wrap gap-1'>

                  {/* Max 3 tags visible for hierarchy */}
                  <Label image={itech1} label={tech1} />
                  <Label image={itech2} label={tech2} />
                  <Label image={itech3} label={tech3} />

                </div>

              </div>
              {windowWidth > 760 && (
                <div className={styles.box2}>
                  <Marquee
                    className={styles.marquee}
                    speed={60}
                    direction="left"
                    pauseOnHover={true}
                    autoFill={true}
                    gradient={false}
                    loop={0}
                    delay={0}
                  >{marquee1}</Marquee>
                  <Marquee
                    className={styles.marquee}
                    speed={55}
                    direction="left"
                    pauseOnHover={true}
                    autoFill={true}
                    gradient={false}
                    loop={0}
                    delay={0}
                  >{marquee2}</Marquee>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Card