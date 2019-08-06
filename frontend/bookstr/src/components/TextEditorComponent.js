import React from 'react';

const TextEditor = (props) => {
    return(
        <div className="row">
            <section  className="divtext col-10 offset-1" contentEditable ></section>
        </div>
    );
};

export default TextEditor;