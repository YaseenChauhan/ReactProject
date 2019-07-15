import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>UserName : {props.userName}</p>
            <p>Another content...</p>
        </div>
    )
}
export default userOutput;