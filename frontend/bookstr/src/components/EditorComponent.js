import React from 'react';
import ButtonEditor from './ButtonEditorComponent';
import TextEditor from './TextEditorComponent';
import ButtonToolBar from './ButtonToolBarComponent';
import { Input } from 'reactstrap';

const Editor = (props) => {
    return(
        <div className="container div-editor">
            <div className="row">
                <Input className ="col-10 offset-1 mt-3 mb-3" placeholder="Chapter Title"/>
            </div>
            <div className="row">
                <div className="col-10 offset-1">
                    <ButtonToolBar/>
                </div>
            </div>
            <TextEditor/>
            <ButtonEditor/>
        </div>
    );
}

export default Editor;