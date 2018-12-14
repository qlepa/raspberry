import React, {Component} from 'react';
import logo from '../img/logo.png';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openMenu: false
        }
    }

    handleMenu = () => {
        console.log('Not yet defined');
    }
    toggleMenu = () => {
        this.setState({
            openMenu: this.state.openMenu ? false : true
        })
        console.log(this.state.openMenu);
    }
    changeHamburgerClass = () => {
        if (this.state.openMenu) return "change ";
    }

    render() {
        return (
            <header className="header">
                <nav className="header__nav">
                    <div className="header__nav__mob">
                        <img className="header__nav__logo__mob" src={logo} alt="Raspberry Logo"
                             onClick={this.handleMenu}/>
                        <div className={`${this.changeHamburgerClass()}`} onClick={this.toggleMenu}>
                            <div className="bar1"></div>
                            <div className="bar2"></div>
                            <div className="bar3"></div>
                        </div>
                    </div>
                    <ul className={`${this.changeHamburgerClass()} header__nav__list`}>
                        <li className="list__item" onClick={this.handleMenu}>
                            about
                        </li>
                        <li className="list__item" onClick={this.handleMenu}>
                            offer
                        </li>
                        <li className="header_nav__logo__desktop list__item" onClick={this.handleMenu}>
                            <img src={logo} alt="Raspberry Logo"/>
                        </li>
                        <li className="list__item" onClick={this.handleMenu}>
                            gallery
                        </li>
                        <li className="list__item" onClick={this.handleMenu}>
                            contact
                        </li>
                    </ul>
                </nav>

            </header>

        )
    }
}

export default Navigation
