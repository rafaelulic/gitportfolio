import React from 'react';
import PageHeader from './PageHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Skills = () => {
    return (
        <div className="container" id="skills">
            <PageHeader title="Skills" />
            <div className="parent">
                <div className="child"><FontAwesomeIcon icon={['fab', 'html5']} size="4x" /></div>
                <div className="child"><FontAwesomeIcon icon={['fab', 'css3']} size="4x" /></div>
                <div className="child"><FontAwesomeIcon icon={['fab', 'js']} size="4x" /></div>
                <div className="child"><FontAwesomeIcon icon={['fab', 'wordpress']} size="4x" /></div>
                <div className="child"><FontAwesomeIcon icon={['fab', 'sass']} size="4x" /></div>
                <div className="child"><FontAwesomeIcon icon={['fab', 'react']} size="4x" /></div>
                <div className="child"><FontAwesomeIcon icon={['fab', 'php']} size="4x" /></div>
                <div className="child"><FontAwesomeIcon icon={['fab', 'laravel']} size="4x" /></div>    
                <div className="child"><FontAwesomeIcon icon={['fab', 'vuejs']} size="4x" /></div>
                <div className="child"><FontAwesomeIcon icon={['fab', 'less']} size="4x" /></div>    
                <div className="child"><FontAwesomeIcon icon={['fab', 'bootstrap']} size="4x" /></div>    
                <div className="child"><FontAwesomeIcon icon={['fab', 'git']} size="4x" /></div>    
            </div>
        </div>
    );
}

export default Skills;

