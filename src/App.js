import React, {Component} from 'react';
import Main from './Components/Main';
import Footer from './Components/Footer';
import Navigation from './Components/Navigation';

class App extends Component {
    render() {
        return (
            <div className="container">
                <Navigation/>
                <div className="wrapper">
                    <Main/>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default App;
