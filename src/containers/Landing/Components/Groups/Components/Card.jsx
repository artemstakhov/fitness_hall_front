import React from 'react';
import styles from './Card.module.css';
import Mark from './Images/check-mark.png';


const Card = (props) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.group}>
                    <h2 className={styles.title}>
                        ГРУПА {props.num}
                    </h2>
                    <p className={styles.description}>
                        ОБИРАЮЧИ ЦЮ ГРУПУ ВИ ОТРИМУЄТЕ:
                    </p>
                </div>
                <div className={styles.discount}>
                    <p className={styles.persentWrapp}><span className={styles.persent}>{props.persent}%</span> <span className={styles.text}>ЗНИЖКУ</span></p>
                </div>

                <div className={styles.additionally}>
                    <div className={styles.additionallyDesc}>
                        <img src={Mark} alt="" />
                        <p className={styles.textMark}>Text</p>
                    </div>
                    <div className={styles.additionallyDesc}>
                        <img src={Mark} alt="" />
                        <p className={styles.textMark}>Text</p>
                    </div>
                    <div className={styles.additionallyDesc}>
                        <img src={Mark} alt="" />
                        <p className={styles.textMark}>Text</p>
                    </div>
                    <button className={styles.submit}>ОФОРМИТИ</button>
                </div>
            </div>
        </div>
    )
}

export default Card;