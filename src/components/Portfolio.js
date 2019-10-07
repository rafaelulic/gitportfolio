import React from 'react';
import PageHeader from './PageHeader';
import { jexLogo, scubedLogo, ciitLogo, jcLogo } from './Images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Fade from 'react-reveal';

const Portfolio = () => {
  return (

    <div className="portfolio container" id="portfolio">

      <PageHeader title="Works" />

      <div big className="partners">
        <Fade top>
          <div className="logo" id="juanex">
          <a href="https://www.juanexchange.com"> 
            <img src={jexLogo} alt="Juan Exchange Logo" />
            <div className="overlay">
              <p>JuanExchange</p>
              <span>Website Design &amp; Development</span>
            </div>
          </a>
          </div>
        </Fade>
        <Fade big right>
          <div className="logo" id="scubed">
            <a href="https://www.scubedcorp.com"> 
              <img src={scubedLogo} alt="S Cubed Corporation Logo" />
              <div className="overlay">
                <p>S Cubed</p>
                <span>Website Design</span>
              </div>
            </a>
          </div>
        </Fade>
        <Fade big bottom>           
          <div className="logo" id="ciit">
            <a href="https://www.ciit.edu.ph"> 
              <img src={ciitLogo} alt="" />
              <div className="overlay">
                <p>CIIT</p>
                <span>Special Instructor</span>
              </div>
            </a>
          </div>
          </Fade>
          <Fade big right>
          <div className="logo" id="juancash">
            <a href="https://www.juancash.com">
              <img src={jcLogo} alt="" />
              <div className="overlay">
                <p>JuanCash</p>
                <span>Website Design</span>
              </div>
            </a>
          </div>
        </Fade>
      </div>
    </div>

  );
}

export default Portfolio;