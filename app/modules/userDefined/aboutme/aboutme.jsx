"use client";
import { useState } from "react";
import style from "./aboutme.module.css";
import { Sign } from "../../../customIcon/index"
import useWindowWidth from "../../helperFunction/getwidth/getWidth";
import ResumeBtn from "../buttons/resumebtn/resumebtn"
import Popup from "../../userDefined/popup/popUp";

export default function AboutMe() {
    const [isOpen, setIsOpen] = useState(false);

    // const Width = useWindowWidth();

    return (
        <div className={style.aboutMeBox}>
            <div className={style.contentColumn}>
                <h1 className={style.title}>DeepDevJose</h1>
                <h1 className={style.title2}>Systems Engineer</h1>
                <p className={style.para}>I engineer complex digital systems at the intersection of hardware, artificial intelligence, and software. My work focuses on building predictive, data-driven systems—ranging from IoT platforms to digital twins and scalable infrastructures—grounded in real constraints and measurable performance.</p>
                <p className={style.para}>With hands-on experience in IoT, machine learning, robotics, and algorithms, I approach complexity not as a barrier, but as a design requirement. I have worked on projects involving LSTM-based Remaining Useful Life (RUL) prediction, secure data pipelines, real-time dashboards, and interactive 3D systems, always prioritizing correctness, robustness, and clarity.</p>
                <p className={style.para}>My engineering process emphasizes precision at every layer: from raw sensor signals and encrypted data transmission to deployed applications and visual interfaces. Rather than focusing on surface-level features, I aim to understand and control the underlying systems that make reliable software possible.</p>
                <p className={style.para}>I don't just write code—I engineer solutions that transform complex problems into structured, dependable systems.</p>
                <div className={style.sign}>
                    {/* <Sign /> */}
                    <ResumeBtn onClick={() => setIsOpen(true)} />
                    <Popup isOpen={isOpen} onClose={() => setIsOpen(false)} />
                </div>
            </div>

            <div className={style.imageColumn}>
                <div className={style.avatarWrapper}>
                    <img src="/avatar.png" alt="DeepDevJose" className={style.avatar} />
                    <p className={style.authorName}>José Manuel Cortes Cerón</p>
                </div>
            </div>
        </div>
    );
}