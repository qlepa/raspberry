import React, {Component} from 'react';
import axios from 'axios';
import Main from './Components/Main';
import Footer from './Components/Footer';
import NavigationDesktop from './Components/NavigationDesktop';

class App extends Component {

    // componentDidMount() {
    //     axios.post('https://recruitment-api.pyt1.stg.jmr.pl/login', {
    //         headers: {
    //             ContentType: 'application/json'
    //         }
    //     });
    // }

    render() {
        return (
            <div className="container">
                <NavigationDesktop/>
                <div className="wrapper">
                    <Main/>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default App;
