import React from 'react';
import './Person.css';

const person = (props) => {
    return (
            <div className="Person">
            <p onClick={props.click}>I am human being and require at least {props.capacity} oxygen in {props.days} day.</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.capacity}/>
            </div>
            )

}
export default person;