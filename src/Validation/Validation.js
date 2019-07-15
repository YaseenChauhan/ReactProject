import React from 'react';
const validation = (props) => {
    let text = 'Text too short!';
    
    if(props.inputLength > 5)
    text = "length is quite enough."

    return (
        <div>
            <p>{text}</p>
        </div>
    );
}
export default validation;