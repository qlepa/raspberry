import React from 'react';

const Footer = () => {
    return (
        <div className="footer">
            <p className="footer__p">
                @2014 RASPBERRY KINGDOM
            </p>
            <p className="footer__p">
                <a href="#" className="container__link">Cookies</a>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="#" className="container__link">Privacy</a>
            </p>
            <p className="footer__p">
                Design by <a href="#" className="container__link designer">Wizard of Oz</a>
            </p>
        </div>
    )
}

export default Footer