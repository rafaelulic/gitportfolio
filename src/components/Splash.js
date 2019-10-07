import React from 'react';
import logo from '../images/raflogowhite.png';
import Fade from 'react-reveal/Fade';

var ReactRotatingText = require('react-rotating-text');

const Splash = () => {
    return (
        <Fade top>
        <div className="splash container" id="intro">
            <div className="logobox">
                <img className="logo" src={logo} alt="rafael ulic logo"/>
            </div>
            <span className="subtitle">Hello.</span>
            <h1 className="title"> I am Rafael Ulic</h1>
            <span className="subtitle">
                <span className="backgrounded">
                    <ReactRotatingText items={['Website Designer', 'Software Developer', 'Professor']} />
                </span>
                <span className="city">from Makati City,</span>
                <span className="country">Philippines.</span>
            </span>       
        </div>
        </Fade>
    );
}

export default Splash;