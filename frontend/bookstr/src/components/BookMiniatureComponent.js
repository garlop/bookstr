import React from 'react';
import Stars from './StarsComponent';

function BookMiniature(){
    return(
        <div className="text-center col-6 col-md-3 mb-3 mt-3">
            <img src={require('../img/imagen1.jpeg')} className="book-image" alt="book front page"/>
            <h5>The little prince</h5>
            <h6>Author: Luis Garnica</h6>
            <Stars/>
        </div>
    );
}

export default BookMiniature;