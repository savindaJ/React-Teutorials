import React, { useState } from 'react';
import './buttonsection.css';

const ButtonSection = (props) => {

    const [text, setName] = useState('');

    function set() {
        props.set(text);
    }
    
    return (
        <div className='btn-section'>
            <input type='text' value={text} onChange={e =>{setName(e.target.value)}} placeholder='Enter your name'/>
            <button onClick={()=>{
                set();
                setName('');
            }}>submit</button>
            <button onClick={props.increment}>increment</button>
            <button onClick={props.decriment}>decriment</button>
        </div>
    );
};

export default ButtonSection;