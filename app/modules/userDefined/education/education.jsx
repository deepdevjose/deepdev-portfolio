import style from './education.module.css'

export default function Education() {
    return (
        <div className={style.educationSection}>
            <h1 className={style.title}>Education</h1>
            <div className={style.timeline}>
                <div className={style.line}></div>
                <div className={style.details}>

                    <div className={style.ed1}>
                        <p className={style.duration}>2023 – Present</p>
                        <h2 className={style.degree}>B.S. in Information and Communication Technologies (ICT)</h2>
                        <p className={style.college}>Instituto Tecnológico Superior del Occidente del Estado de Hidalgo (ITSOEH)</p>
                        <p className={style.cgpa}>Focus on Software Engineering, Artificial Intelligence, Robotics, and Systems Development</p>
                    </div>

                    <div className={style.ed1}>
                        <p className={style.duration}>Completed: July 2023</p>
                        <h2 className={style.degree}>Programming Technician</h2>
                        <p className={style.college}>Centro de Estudios Tecnológicos Industrial y de Servicios No. 026</p>
                        <p className={style.cgpa}>Foundations in computer science, programming, algorithms, and computer systems</p>
                    </div>

                </div>
            </div>
        </div>
    )
}
