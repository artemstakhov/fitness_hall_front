import React from 'react';
import styles from './Tarifs.module.css';
import Tariff from './Components/Tariff';

const simpleDesc = {
    item1: [true, "text", 1],
    item2: [true, "text", 2],
    item3: [false, "text", 3],
    item4: [false, "text", 4],
}
const simplePlusDesc = {
    item1: [true, "text", 1],
    item2: [true, "text", 2],
    item3: [true, "text", 3],
    item4: [false, "text", 4],
}
const unlimitedDesc = {
    item1: [true, "text", 1],
    item2: [true, "text", 2],
    item3: [true, "text", 3],
    item4: [true, "text", 4],
}

const Tarrifs = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.titleWrapper}>
                    <h1 className={styles.title}>НАШІ ТАРИФИ</h1>
                </div>
                <div className={styles.tarrifs}>
                    <Tariff title='Базовий' descriptions={simpleDesc}/>  
                    <Tariff title='Базовий+' descriptions={simplePlusDesc}/>  
                    <Tariff title='Безліміт' descriptions={unlimitedDesc} />  
                </div>
            </div>
        </div>
    )
}

export default Tarrifs;