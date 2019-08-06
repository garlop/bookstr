import React from 'react';

const ButtonEditor = (props) => {
    return(
    <div className="row justify-content-center">
        <div className="col-3">
            <button className="btn btn-info btn-block mt-3">Save</button>
        </div>
        <div className="col-4">
            <button className="btn btn-info btn-block mt-3">Save and Write Next Chapter</button>
        </div>
        <div className="col-3">
            <button className="btn btn-success btn-block mt-3">Publish</button>
        </div>
    </div>
    );
}

export default ButtonEditor;