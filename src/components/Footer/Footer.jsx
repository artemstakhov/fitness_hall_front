import React from 'react';
import "./Footer.css";

function Footer(){
    return (
        <footer className='footer'>
            <div className="content">
                <div className="terms">
                    <div className="term"><p className='termTitle'>Privacy Policy</p></div>
                    <div className="term"><p className='termTitle'>Terms & Conditions</p></div>
                    <div className="term"><p className='termTitle'>Return Policy</p></div>
                </div>
                <div className="copyright">
                    <p className='copyrightTitle'>
                    © 2022 Bubble Gym. Всі права захищені.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;