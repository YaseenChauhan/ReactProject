import React from 'react';
import Radium from 'radium';
import './Person.css';

const person = (props) => {
    const style = {
        '@media(min-width : 1200px)' : 
        {
            border : '2px solid black',
            borderRadius: '10px',
            boxShadow: '5px -5px 5px black',
            backgroundColor : '#33CEFF'
        }
    };
    const inputStyle = {
        border : '2px solid black',
        borderRadius: '10px',
        boxShadow: '0 3px 5px #ccc',
        padding : '10px',
        backgroundColor : 'lightgrey'
    }
    return (
            <div className="Person" style = {style}>
            <p onClick={props.click}>I am human being and require at least {props.capacity} ml oxygen in {props.days} day.</p>
            <p>{props.children}</p>
            <input style={inputStyle} type="text" onChange={props.change} value={props.capacity}/>
            </div>
            )

}
export default Radium(person);