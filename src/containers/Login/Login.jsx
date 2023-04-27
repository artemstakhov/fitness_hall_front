import React from 'react';
import styles from './Login.module.css';
import userLogo from './Images/username-auth.png';
import passLogo from './Images/password-auth.png';
import visiblePass from './Images/active-pass.png';
import enter from './Images/enter.png';

const Login = ({ onLogin }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.auth}>
                {/* title, paragraph */}
                <div className={styles.titleWrapper}>
                    <h1 className={styles.title}>Вхід</h1>
                </div>
                <div className={styles.enterDataParagraphWrapper}>
                    <p className={styles.enterDataParagraph}>Введіть дані нижче</p>
                </div>
                {/* form */}
                <form action="" method='post'>
                    <div className={styles.inputs}>
                        <div className={styles.inputWrapper}>
                            <img src={userLogo} alt="" />
                            <input type="tel" placeholder='+38(___) ___ __ __' className={styles.input}/>    
                        </div>
                        <div className={styles.inputWrapper}>
                            <img src={passLogo} alt="" />
                            <input type="password" placeholder='••••••••••••' className={styles.input}/>
                            <img src={visiblePass} alt="" className={styles.visibility} />
                        </div>
                    </div>
                    <div className={styles.rememberWrapper}>
                        <label className={styles.rememberTitle}><input type="checkbox" name="rememberMe" className={styles.rememberCheckBox}/>Запам'ятати мене</label>
                    </div>
                    <button className={styles.submit} onClick={() => { onLogin(true) }}>
                        <img src={enter} alt="" className={styles.empty}/>
                        Увійти
                        <img src={enter} alt="" />
                    </button>
                </form>    
            </div>
        </div>
    )
}

export default Login;