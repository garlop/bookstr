import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ButtonT = (props) => {
    return(
        <button className="btn btn-light" key={props.cmd} onMouseDown={evt => {
            evt.preventDefault(); // Avoids loosing focus from the editable area
            document.execCommand(props.cmd, false, props.arg); // Send the command to the browser
        }}>
            <FontAwesomeIcon icon={props.icon}/>
        </button>
    );
}

export default ButtonT;