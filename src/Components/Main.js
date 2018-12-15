import React, {Component} from 'react';
import Modal from "react-modal";
import axios from "axios";


class Main extends Component {
    constructor() {
        super();
        this.state = {
            modalIsOpen: false,
            userMail: '',
            userPassword: '',
            loggedIn: '',
            serverMessage: ''
        };
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
        this.subtitle.style.color = '#000';
    }

    closeModal() {
        this.setState({modalIsOpen: false, loggedIn: ''});
    }

    handleMail = e => {
        this.setState({
            userMail: e.target.value
        })
    }
    handlePassword = e => {
        this.setState({
            userPassword: e.target.value
        })
    }

    serverMessageNone() {
        if (this.state.loggedIn === '') {
            return (
                <div className="main__modal__content">
                    <h2 className="model__content__title" ref={subtitle => this.subtitle = subtitle}>Are you a
                        Raspberry Knight?</h2>
                    <form className="content__form" onSubmit={this.postLogIn}>
                        <input className="content__input" type="email" placeholder="Email"
                               onChange={this.handleMail}/>
                        <input className="content__input" type="password" placeholder="Password"
                               onChange={this.handlePassword}/>
                        <button className="main__btn main__btn--red" type="submit">log in</button>
                    </form>
                </div>
            )
        }
    }

    serverMessageError() {
        if (this.state.loggedIn === 'error') {
            return (
                <div className="main__modal__content">
                    <h2 className="model__content__title" ref={subtitle => this.subtitle = subtitle}>Are you a
                        Raspberry Knight?</h2>
                    <h3>{this.state.serverMessage}</h3>
                    <form className="content__form" onSubmit={this.postLogIn}>
                        <input className="content__input" type="email" placeholder="Email"
                               onChange={this.handleMail}/>
                        <input className="content__input" type="password" placeholder="Password"
                               onChange={this.handlePassword}/>
                        <button className="main__btn main__btn--red" type="submit">log in</button>
                    </form>
                </div>
            )
        }
    }

    serverMessageOk() {
        if (this.state.loggedIn === 'ok') {
            return (
                <div className="main__modal__content">
                    <h2 className="model__content__title" ref={subtitle => this.subtitle = subtitle}>Are you a
                        Raspberry Knight?</h2>
                    <h3>{this.state.serverMessage}</h3>
                </div>
            )
        }
    }

    postLogIn = e => {
        e.preventDefault()

        axios.post(
            'https://recruitment-api.pyt1.stg.jmr.pl/login',
            {
                login: this.state.userMail,
                password: this.state.userPassword
            })
            .then((res) => {
                this.setState({
                    loggedIn: res.data.status,
                    serverMessage: res.data.message
                })
            })
    }

    render() {
        return (
            <div className="main">
                <h1 className="main__title">Raspberry kingdom</h1>
                <button className="main__btn" onClick={this.openModal}>ENTER THE GATES</button>
                <Modal
                    className="main__modal"
                    overlayClassName="overlay"
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                >
                    {this.serverMessageNone()}
                    {this.serverMessageError()}
                    {this.serverMessageOk()}
                </Modal>
            </div>
        )
    }
}

export default Main