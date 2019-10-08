import React from 'react';
import PageHeader from './PageHeader';
import rafA from '../images/A.jpg';
import rafB from '../images/B.jpg';
import rafC from '../images/C.jpg';
import Fade from 'react-reveal/Fade';

const about = [
    {
        id: 0,
        title: "",
        description: "",
        image: rafA,
        alt: ""
    },
    {
        id: 1,
        title: "",
        description: "",
        image: rafA,
        alt: ""
    },
    {
        id: 2,
        title: "",
        description: "",
        image: rafA,
        alt: ""
    },
]

const About = () => {
    return (
        <div className="about container" id="about">
            <PageHeader title="About" />
            <div className="row">
                <Fade left>
                    <div className="col">
                        <h3>01. <br />Website Design</h3>
                    </div>
                </Fade>
                <Fade top>
                    <div className="col">
                        <img src={rafA} className="image" alt="" />
                        <div className="wrapper">
                            <p>Web design and Web development are two different things. Fortunately, I can do both for you and that's a good thing. </p> 
                            <p>As a Web designer, I meticulously craft the look and feel of your Website while also considering rich user experience for your Website's visitors. </p>
                            <p>Being a Web developer, I am ensuring to meet the requirements of the Website's design by employing and utilizing the latest and cutting-edge technologies to build your Website that you can be very proud of.</p>
                        </div>
                    </div>
                </Fade>
            </div>

            <div className="row desktop-only">
                <Fade top>
                    <div className="col">
                        <img src={rafB} className='image' alt="" />
                        <div className="wrapper">
                            <p>Whether Web applications or mobile apps, I understand that this is an extension of your business to reach your clients and empower your employees. </p> 
                            <p> Having this in mind, I see to it that your business processes are carried out to your new application while also considering user engagement by making user-friendly features to make it more effective.</p>
                        </div>
                    </div>
                </Fade>
                <Fade right>
                    <div className="col">
                        <h3>02. <br />Software Development</h3>
                    </div>
                </Fade>
            </div>

            <div className="row mobile-only">
                <Fade right>
                    <div className="col">
                        <h3>02. <br />Software Development</h3>
                    </div>
                </Fade>
                <Fade top>
                    <div className="col">
                        <img src={rafB} className='image' alt="" />
                        <div className="wrapper">
                            <p>Whether Web applications or mobile apps, I understand that this is an extension of your business to reach your clients and empower your employees. Having this in mind, I see to it that your business processes are carried out to your new application while also considering user engagement by making user-friendly features to make it more effective.</p>
                        </div>
                    </div>
                </Fade>
            </div>

            <div className="row">
                <Fade left>
                    <div className="col">
                        <h3>03. <br /> Professor</h3>
                    </div>
                </Fade>
                <Fade top>
                    <div className="col">
                        <img src={rafC} className="image" alt="" />
                        <div className="wrapper">
                            <p>As the famous adage goes "sharing is caring", I can be of help in one on one or in a large group of crowd. I have mentored lots of people ranging from college students to professionals who wants to improve their skills set.</p>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    );
}

export default About;

