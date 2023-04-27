import React from 'react';
import styles from './Landing.module.css';
import MainFrame from './Components/MainFrame/MainFrame';
import Groups from './Components/Groups/Groups';
import Tarifs from './Components/Tariff/Tarifs';
import Gallery from './Components/Gallery/Gallery';
import Location from './Components/Location/Location';
import Trainers from './Components/Trainers/Trainers';


const Landing = () => {
    return (
        <div className={styles.wrapper}>
            <MainFrame />
            <Gallery />
            <Trainers />
            <Groups />
            <Tarifs />
            <Location />
        </div>
    )
}

export default Landing;