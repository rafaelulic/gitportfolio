import React from 'react';
import logo from '../images/raflogowhite.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="logo-box">
                <Link to="splash" spy={true} smooth={true} duration={1500} ><img className="logo" src={logo} alt="rafael ulic logo"/></Link>
                {/* <h2 className="logo"><a href="#splash">rafael ulic</a></h2> */}
            </div>
            <nav className="nav">
                <Link to="about" spy={true} smooth={true} duration={1500} >About</Link>
                <Link to="portfolio" spy={true} smooth={true} duration={1500} >Portfolio</Link>
                <Link to="resume" spy={true} smooth={true} duration={1500} >Resume</Link>
                <Link to="contact" spy={true} smooth={true} duration={1500} >Contact</Link>
                
            </nav>
            <div className="socials">
                <a href=""><FontAwesomeIcon icon={faEnvelope} size="lg" /></a>
                <a href=""><FontAwesomeIcon icon={['fab', 'twitter']} size="lg" /></a>
                <a href=""><FontAwesomeIcon icon={['fab', 'youtube']} size="lg" /></a>
                <a href=""><FontAwesomeIcon icon={['fab', 'github']} size="lg" /></a>
            </div>
        </div>
    );
}

export default Sidebar;

