import React from 'react';

const char = (props) => {
    const style = {
        margin : '16px',
        padding : '16px',
        display : 'inline-block',
        border : '3px solid black',
        textAlign : 'center'
    }
    return (
        <div style= {style} onClick={props.clicked}>
           {props.value}
        </div>
    );
}
export default char;