import React, { Component } from 'react';
import Modal from "react-modal";

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
    }
};

class Main extends Component {
    constructor() {
        super();
        this.state = {
            modalIsOpen: false
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
   render(){
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
                {/*<button onClick={this.closeModal}>X</button>*/}
                <form className="content__form">
                    <input type="text" value="email"/>
                    <input type="text"/>
                    <button>log in</button>
                </form>
                </div>
            </Modal>
        </div>
     )
   }
 }
 export default Main