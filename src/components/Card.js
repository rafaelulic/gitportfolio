import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Card = (props) => {
    return (
        <div className="card">
            
            <h2><FontAwesomeIcon icon={props.icon} style={{fontSize: 20, color: props.color}}/>{props.cardTitle}</h2>
            <p>{props.cardDesc}</p>
        </div>
    );
}



export default Card;