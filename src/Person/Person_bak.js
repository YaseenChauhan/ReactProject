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

// const person = (props) => {
//     const style = {
//         '@media(min-width : 1200px)' : 
//         {
//             border : '2px solid black',
//             borderRadius: '10px',
//             boxShadow: '5px -5px 5px #5aa8fb',
//             backgroundColor : '#5aa8fb'
//         }
//     };
//     const inputStyle = {
//         border : '2px solid #5aa8fb',
//         borderRadius: '10px',
//         boxShadow: '0 3px 5px #5aa8fb',
//         padding : '10px',
//         backgroundColor : 'lightgrey'
//     }
//     const rand = Math.random();
//     if(rand < 0.2){
//         throw new Error('something went wrong');
//     }


//     return (
//             <div className="Person" style = {style}>
//             <p onClick={props.click}>I am human being and require at least {props.capacity} ml oxygen in {props.days} day.</p>
//             <p>{props.children}</p>
//             <input style={inputStyle} type="text" onChange={props.change} value={props.capacity}/>
//             </div>
//             )

// }
// export default Radium(person);