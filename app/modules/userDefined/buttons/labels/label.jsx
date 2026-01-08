import style from './label.module.css';
import Image from 'next/image'

export default function Label({
    label = "",
    image = "",
}) {
    return (
        <>{label && (

            <div className={style.box}>
                {image && (
                    <Image className={style.img} src={image} width={16} height={16} alt={label} placeholder="empty"  />
                )}
                <div className={style.label}>{label}</div>
            </div>
        )}
        </>


    );


}