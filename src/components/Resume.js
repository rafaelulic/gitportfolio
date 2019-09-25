import React from 'react';
import Card from './Card';


function Title(props) {
    return (
        <h4><span className="black-background">{props.title}</span></h4>
    )
}

function Boxes(props) {
    return (
        <div className="square">
            <div className="time">{props.time}</div>
            <div className="company">{props.company}</div>
            <div className="position">{props.position}</div>
            <div className="description">{props.description}</div>
        </div>
    )
}

const experience = [
    {
        id: 0,
        time: "Mar 2019 - Present",
        company: "Zybitech Inc.",
        position: "Frontend Developer",
        description: "Responsible for implementing visual elements that users see and interact within a web application."
    },
    {
        id: 1,
        time: "Oct 2018 - Feb 2019",
        company: "1902 Software Development Corp.",
        position: "Web Developer",
        description: "Developed E-commerce Webshops for various Danish companies using the Magento platform."
    },
    {
        id: 2,
        time: "May 2018 - Sep 2018",
        company: "Department of Trade & Industry",
        position: "Project Coordinator",
        description: "Formulated policy guidelines for data governance by developing Metadata and Master Data Management documents."
    },
    {
        id: 3,
        time: "Jun 2016 - Sep 2017",
        company: "Emilio Aguinaldo College",
        position: "Systems Dev Manager",
        description: "Managed in-house IT projects from inception to deployment and maintenance."
    },
]

const education = [
    {
        id: 0,
        time: "Apr 2013",
        company: "Polytechnic University of the Ph",
        position: "MS Information Tech",
        description: "Responsible for implementing visual elements that users see and interact within a web application"
    },
    {
        id: 1,
        time: "Apr 2007",
        company: "Emilio Aguinaldo College",
        position: "BS Computer Science",
        description: "Responsible for implementing visual elements that users see and interact within a web application"
    },
]

const services = [
    {
        id: 1,
        icon: "desktop",
        title: "Web Design",
        desc: "Content and layout with a touch of magic.",
    },
    {
        id: 2,
        icon: "database",
        title: "Web Development",
        desc: "From Frontend to Backend, I got you.",
    },
    {
        id: 3,
        icon: "chalkboard-teacher",
        title: "Tutorial",
        desc: "I code. You code. Awesome.",
    },
    {
        id: 4,
        icon: "paint-brush",
        title: "Graphic Design",
        desc: "Eye catching colors and shapes.",
    },
    {
        id: 5,
        icon: "mobile-alt",
        title: "App Development",
        desc: "Something that can be tapped or swiped.",
    },
    {
        id: 6,
        icon: "microphone",
        title: "Resource Speaker",
        desc: "Me + a microphone + a huge screen + a big crowd.",
    },
]

const Resume = () => {
    return (
        <div className="container" id="resume">
            <div className="two-columns">
                <div className="col" id="image-container">
                    <div id="image"></div>
                </div>
                <div className="col">
                    <h4>Some Words</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente pariatur qui numquam unde explicabo, suscipit minus at maxime aliquid fugiat iure ipsum sint ut perspiciatis, aspernatur amet debitis sunt placeat?
                    </p>
                    <div className="three-columns">
                        {services.map(item => 
                            <div className="child" key={item.id}>
                            <Card 
                                key={item.id}
                                icon={item.icon}
                                cardTitle={item.title} 
                                cardDesc={item.desc}

                            />
                            </div>
                            )                
                        }
                    </div>
                    <button className="raf-btn">Download CV</button>
                </div>
            </div>
            <Title title="Experience" />
            <div className="flex-wrapper">
                {experience.map(item => 
                    <Boxes
                    key={item.id}
                    time={item.time}
                    company={item.company}
                    position={item.position}
                    description={item.description} />
                    )                
                }                
            </div>
            <Title title="Education" />
            <div className="flex-wrapper">
                {education.map(item => 
                    <Boxes
                    key={item.id}
                    time={item.time}
                    company={item.company}
                    position={item.position}
                    description={item.description} />
                    )                
                }                
            </div>
        </div>
    );
}

export default Resume;