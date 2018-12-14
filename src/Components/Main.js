import React, {Component} from 'react';
import Modal from "react-modal";
import axios from "axios";


class Main extends Component {
    constructor() {
        super();
        this.state = {
            modalIsOpen: false,
            userMail: '',
            userPassword: ''
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
        this.setState({modalIsOpen: false});
    }

    handleMail = e => {
        this.setState({
            userMail: e.target.value
        })
    }
    handlePassword = e => {
        this.setState({
            userMail: e.target.value
        })
    }
    postLogIn = e => {
        e.preventDefault()

        const req = axios.post('https://recruitment-api.pyt1.stg.jmr.pl/login', JSON.stringify({
            login: this.state.userMail,
            password: this.state.userPassword
        }))
            .then((res) => console.log(res))
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
                    <div className="main__modal__content">
                        <h2 ref={subtitle => this.subtitle = subtitle}>Are you a Raspberry Knight?</h2>
                        <form className="content__form" onSubmit={this.postLogIn}>
                            <input type="email" placeholder="Email" onChange={this.handleMail}/>
                            <input type="password" placeholder="Password" onChange={this.handlePassword}/>
                            <button type="submit">log in</button>
                        </form>
                    </div>
                </Modal>
            </div>
        )
    }
}

export default Main