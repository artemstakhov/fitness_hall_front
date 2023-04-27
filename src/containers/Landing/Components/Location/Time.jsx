import React from 'react';
import styles from './Time.module.css';

const Time = (props) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.day}>
                <h2 className={styles.name}>{props.day}</h2>
            </div>
            <div className={styles.times}>
                <p className={styles.time}>{props.from}<br/>-<br/>{props.until}</p>
            </div>
        </div>
    )
}

export default Time;