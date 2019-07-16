import React from 'react';
import Radium from 'radium';
import './Person.css';



const person = (props) => {
    const inputStyle = {
        border : '2px solid #5aa8fb',
        borderRadius: '10px',
        boxShadow: '0 3px 5px #5aa8fb',
        padding : '10px',
        backgroundColor : 'lightgrey'
    }
    


    return (
            <div className="Person" style = {inputStyle}>
            <p onClick={props.click}>I am human being and require at least {props.capacity} ml oxygen in {props.days} day.</p>
            <p>{props.children}</p>
            <input style={inputStyle} type="text" onChange={props.change} value={props.capacity}/>
            </div>
            )

}
export default person;