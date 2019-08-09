import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function Stars(){
    return(
        <div>
            <FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar} className="checked"></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
        </div>
    );
}

export default Stars;