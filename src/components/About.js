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
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus fugit consequatur sint ducimus ipsa! Eius, architecto. Distinctio doloribus vitae voluptates quod assumenda quae veniam voluptas aspernatur harum, illum in cupiditate.</p>
                        </div>

                    </div>
                </Fade>
            </div>

            <div className="row desktop-only">
                <Fade top>
                    <div className="col">
                        <img src={rafB} className='image' alt="" />
                        <div className="wrapper">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus fugit consequatur sint ducimus ipsa! Eius, architecto. Distinctio doloribus vitae voluptates quod assumenda quae veniam voluptas aspernatur harum, illum in cupiditate.</p>
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
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus fugit consequatur sint ducimus ipsa! Eius, architecto. Distinctio doloribus vitae voluptates quod assumenda quae veniam voluptas aspernatur harum, illum in cupiditate.</p>
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
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus fugit consequatur sint ducimus ipsa! Eius, architecto. Distinctio doloribus vitae voluptates quod assumenda quae veniam voluptas aspernatur harum, illum in cupiditate.</p>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    );
}

export default About;

