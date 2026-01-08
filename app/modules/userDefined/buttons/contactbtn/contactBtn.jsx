'use client'
import style from './contactBtn.module.css'
import {Arrow} from '@/app/customIcon/index'

export default function ContactBtn({
    label = "Label",
    onClick = () => { },
    type = "button",

}) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={style.btn}
        >
            <div className={style.txt}>
                {label}
                
                <Arrow className={style.arrow}/>

            </div>
            <div className={style.dash}></div>

        </button>
    )
}
