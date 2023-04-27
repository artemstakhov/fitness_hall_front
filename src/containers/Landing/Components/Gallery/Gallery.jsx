import React from 'react';
import styles from './Gallery.module.css';

const Gallery = () => {
    const slides = [
        {url: './Images/slide-1.png', name: 'Slide Name'},
        {url: './Images/slide-2.png', name: 'Slide Name'},
        {url: './Images/slide-3.png', name: 'Slide Name'},
        {url: './Images/slide-4.png', name: 'Slide Name'},
        {url: './Images/slide-5.png', name: 'Slide Name'},
        {url: './Images/slide-6.png', name: 'Slide Name'},
    ]
    return (
        <div className={styles.wrapper}>
            
        </div>
    )
}


export default Gallery;