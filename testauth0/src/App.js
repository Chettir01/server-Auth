import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as UrlService from './url';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    static propsTypes = {
        userInfo: PropTypes.array
    }

    constructor(props){
        super(props);

        this.state = {
            userInfo: null,
        }
    }

    getHome(){
        UrlService.getHome()
            .then(r => r.json())
            .then(userInfo => {
                console.log('userInfo', userInfo)
                this.setState({userInfo : userInfo})
            })
    }

    componentDidMount(){
        console.log("tentative de connexion en cours")
        this.getHome();
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={'/img/serli-logo.png'} className="App-logo" alt="logo" />
                    <h2> Welcome to Serli</h2>
                </header>
                <div className="home-container">
                    <div className="zoom service-border">
                        <div className="service-name">
                            <a href="http://localhost:3002/trombinoscope">
                                <img className="service-img"  src = "/img/tromb1.jpeg"  alt="card"/>  <br/>
                                Trombinoscope
                            </a>
                        </div>
                    </div>
                    <div className="zoom service-border">
                        <div className="service-name">
                            <a href="http://localhost:3001/lunchvue">
                                <img className="service-img"  src = "/img/lunchAtWork.jpeg"  alt="card"/>  <br/>
                                Lunch at work
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;