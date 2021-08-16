import React from 'react';
import './input.css';

const Input = props =>{
    return(
        <input className="input" placeholder="input" value={props.value} onChange={props.changed}/>
    );
}

export default Input