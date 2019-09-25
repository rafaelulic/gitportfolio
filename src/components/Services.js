import React from 'react';
import Card from './Card';
import PageHeader from './PageHeader';

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



const Services = () => {
    return (        
        <div className="services container" id="services">
            <PageHeader title="Awesome Services" />
            <div className="row">                
                {services.map(item => 
                    <Card 
                        key={item.id}
                        icon={item.icon}
                        cardTitle={item.title} 
                        cardDesc={item.desc}

                    />
                    )                
                }
            </div>
        </div>
        
    );
}

export default Services;

