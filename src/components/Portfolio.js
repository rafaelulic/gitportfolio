import React from 'react';
import PageHeader from './PageHeader';
import jexlogo from '../images/jex-logo.png';
import scubedlogo from '../images/scc-logo.png';
import ciitlogo from '../images/ciit-logo.png';
import jclog from '../images/juancash-logo.png';
import { jexLogo, scubedLogo, ciitLogo, jcLogo } from './Images'

const Portfolio = () => {
  return (

    <div className="portfolio container" id="portfolio">

      <PageHeader title="Works" />
      <div className="partners">
        <div className="logo" id="juanex">
          <img src={jexLogo} alt="Juan Exchange Logo" />
          <div className="overlay">
            <p>JuanExchange</p>
          </div>
        </div>
        <div className="logo" id="scubed">
          <img src={scubedLogo} alt="S Cubed Corporation Logo" />
          <div className="overlay">
            <p>S Cubed</p>
          </div>
        </div>
        <div className="logo" id="ciit">
          <img src={ciitLogo} alt="" />
          <div className="overlay">
            <p>CIIT</p>
          </div>
        </div>
        <div className="logo" id="juancash">
          <img src={jcLogo} alt="" />
          <div className="overlay">
            <p>JuanCash</p>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Portfolio;