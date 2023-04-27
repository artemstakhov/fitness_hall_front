import React from 'react';
import styles from './Groups.module.css';
import Card from './Components/Card';

const Groups = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.titleWrapper}>
                    <h1 className={styles.title}>ГРУПИ НА ВИБІР</h1>
                </div>
                <div className={styles.cards}>
                    <Card persent='10' num='1'/>
                    <Card persent='15' num='2'/>
                    <Card persent='20' num='3'/>
                </div>
            </div>
        </div>
    )
}

export default Groups;