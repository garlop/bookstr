import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import Editor from './EditorComponent';
import Home from './HomeComponent';
import NavbarBookstr from './NavBarComponent';

function Main(){
    return(
        <>
        <NavbarBookstr/>
        <Switch>
            <Route path="/home" component={Home}/>
            <Route path="/editor" component={Editor}/>
            <Redirect to="/home" component={Home}/>
        </Switch>
        </>
    );
}

export default Main;