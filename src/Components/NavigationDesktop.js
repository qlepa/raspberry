import React, { Component} from 'react';

class NavigationDesktop extends React.Component {


   render(){
     return (
        <header className="header">
            <nav className="header__nav">
                <ul className="header__nav__list">
                    <li className="list__item">
                        <a href="" className="list__item__link">ABOUT</a>
                    </li>
                    <li className="list__item">
                        <a href="" className="list__item__link">OFFER</a>
                    </li>
                    <li className="list__item">
                        <img src="../img/logo.png" alt=""/>
                    </li>
                    <li className="list__item">
                        <a href="" className="list__item__link">GALLERY</a>
                    </li>
                    <li className="list__item">
                        <a href="" className="list__item__link">CONTACT</a>
                    </li>
                </ul>
            </nav>

        </header>

     )
   }
 }

 export default NavigationDesktop
