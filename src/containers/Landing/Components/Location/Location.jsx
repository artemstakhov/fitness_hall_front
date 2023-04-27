import React from 'react';
import styles from './Location.module.css';
import Time from './Time';
import Instagram from './Images/instagram-logo.png';
import Network from './Images/instagram-logo 54x54.png';

const Location = () => {
    const days = {
        monday: ['ПН', '09:00', '22:00'],
        tuesday: ['ВТ', '09:00', '22:00'],
        wednesday: ['СР', '09:00', '22:00'],
        thursday: ['ЧТ', '09:00', '22:00'],
        friday: ['ПТ', '09:00', '22:00'],
        saturday: ['СБ', '09:00', '20:00'],
        sunday: ['НД', '09:00', '20:00'],
    }
    const daysElement = Object.keys(days).map((item, key) => {
        return (
            <Time day={days[item][0]} from={days[item][1]} until={days[item][2]}/>
        )
    });
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.schedule}>
                    <h2 className={styles.title}>ГРАФІК РОБОТИ ТА АДРЕСА</h2>
                    <div className={styles.times}>
                        {daysElement}
                    </div>
                    <div className={styles.line}></div>
                    <div className={styles.addressWrapper}>
                        <img src={Instagram} alt="" />
                        <p className={styles.address}>м. Текст вул.Текст буд. Текст</p>
                    </div>
                    <div className={styles.networks}>
                        <img src={Network} alt="" className={styles.networkLogo}/>
                        <img src={Network} alt="" className={styles.networkLogo}/>
                        <img src={Network} alt="" className={styles.networkLogo}/>
                    </div>
                </div>
                <div className={styles.map}></div>
            </div>
        </div>
    )
}

export default Location;