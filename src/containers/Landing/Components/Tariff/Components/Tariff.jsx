import React from 'react';
import styles from './Tariff.module.css';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import Mark from './Images/check-mark.png';

       

const Tariff = ({title, descriptions}) => {
    const descriptionElements = Object.keys(descriptions).map((item, key) => {
        return (
            <div key={descriptions[item][2]} className={styles.description}>
                {(descriptions[item][0]) ? <TaskAltIcon sx={{ color: "white" }} className={styles.mark} /> : <CancelOutlinedIcon sx={{ color: "white" }} className={styles.mark} /> }
                <p> {descriptions[item][1]}</p>
            </div>
        )
    });

    return (
        <div className={styles.wrapper}>
            <div className={styles.titleWrapper}>
                <h2 className={styles.title}>
                    {title}
                </h2>
            </div>
            { descriptionElements }
            <button className={styles.submit}>ОФОРМИТИ</button>
        </div>
    )
}

export default Tariff;