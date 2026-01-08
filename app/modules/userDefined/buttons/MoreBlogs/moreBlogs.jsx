'use client'
import styles from './moreBlogs.module.css'
import {Arrow} from '@/app/customIcon/index'
import Link from 'next/link'; 

export default function LinkButton({
    label = "Label",
    href= "/",

}) {
    return (
        <Link
            
            href={href}
            className={styles.btn}
        >
            <div className={styles.circle}>
            </div>
            <div className={styles.txt}>
                {label}
                <Arrow className={styles.arrow}/>
            </div>
        </Link>
    )
}
