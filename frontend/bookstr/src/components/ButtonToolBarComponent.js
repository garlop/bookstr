import React from 'react';
import { ButtonToolbar, ButtonGroup } from 'reactstrap';
import ButtonT from './ButtonComponent';
import { faUnderline, faItalic, faBold, faAlignCenter, faAlignLeft, faAlignRight, faAlignJustify, faIndent, faOutdent, faListOl, faListUl, faFileImage } from '@fortawesome/free-solid-svg-icons'

const ButtonToolBar = (props) => {
    return(
        <ButtonToolbar className ="mb-3">
            <ButtonGroup>
                <ButtonT cmd="underline" icon={faUnderline}/>
                <ButtonT cmd="italic" icon={faItalic}></ButtonT>
                <ButtonT cmd="bold" icon={faBold}></ButtonT>
            </ButtonGroup>
            <ButtonGroup>
                <ButtonT cmd="justifyCenter" icon={faAlignCenter}></ButtonT>
                <ButtonT cmd="justifyLeft" icon={faAlignLeft}></ButtonT>
                <ButtonT cmd="justifyRight" icon={faAlignRight}></ButtonT>
                <ButtonT cmd="justifyFull" icon={faAlignJustify}></ButtonT>
            </ButtonGroup>
            <ButtonGroup>
                <ButtonT cmd="indent" icon={faIndent}></ButtonT>
                <ButtonT cmd="outdent" icon={faOutdent}></ButtonT>
                <ButtonT cmd="insertOrderedList" icon={faListOl}></ButtonT>
                <ButtonT cmd="insertUnorderedList" icon={faListUl}></ButtonT>
                <ButtonT cmd="insertImage" icon={faFileImage} arg={require('../img/imagen1.jpeg')}></ButtonT>
            </ButtonGroup>
        </ButtonToolbar>
    );
}

export default ButtonToolBar;