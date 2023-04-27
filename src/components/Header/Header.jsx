import React from 'react';
import styles from './Header.css';
import logo from './Images/Subtract.png'
import logoText from'./Images/Frame.png'


function Header(){
    return (
        <header className="header">
        <div className="menuWrapper">
            <div className="menu">
                    <div className="logo">
                        <a href="#"><img src={logo} alt="Logo"/></a>
                        <a href="#"><img src={logoText} alt="Logo"/></a>
                    </div>
                    <div className="menuItems">
                        <h3 className="item">Тарифи</h3>
                        <h3 className="item">Про нас</h3>
                        <h3 className="item">Інфо</h3>
                        <h3 className="item">Новини</h3>
                    </div>
                    <div className="empty">
                    </div>
                <div className="user"><a className="userInitials" href="/login">АБ</a></div>
            </div>       
        </div>
    </header>
    );
}

export default Header;