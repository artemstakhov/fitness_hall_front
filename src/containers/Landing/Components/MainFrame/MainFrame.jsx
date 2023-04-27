import React from 'react';
import styles from './MainFrame.module.css';
import Logo from '../../Images/Subtract.png';
import Arrow from '../../Images/arrow.png';

const MainFrame = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.textWrapper}>
                <div className={styles.content}>
                    <div className={styles.logo}>
                        <img src={Logo} alt="" className={styles.logoImg}/>
                    </div>
                    <div className={styles.descriptionWrapper}>
                        <div className={styles.description}>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse maximus viverra arcu, ac mattis lorem accumsan quis. Etiam lobortis dolor sed enim sodales, nec tristique ligula mollis. Aenean erat sapien, sollicitudin nec blandit facilisis, malesuada non diam. Integer maximus sagittis leo, ut sagittis ipsum feugiat ut.
                            </p>
                        </div>
                        <button className={styles.moreInfo}>
                            <img src={Arrow} alt="" className={styles.empty}/>
                            Детальніше
                            <img src={Arrow} alt="" />
                        </button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default MainFrame;