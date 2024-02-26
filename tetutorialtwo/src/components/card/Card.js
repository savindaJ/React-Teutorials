import React from 'react';
import './card.css';

const Card = (propOne) => {
    return (
        <div>
            <p className='content'>Vehicle Number : {propOne.vehicleNumber}</p>
            <p className='content'>Vehicle Color : {propOne.color}</p>
            {propOne.children}
            <hr></hr>
        </div>
    );
};

export default Card;