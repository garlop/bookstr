import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Editor from './components/EditorComponent';
import NavbarBookstr from './components/NavBarComponent';

function App() {
  return (
    <div className="App">
      <NavbarBookstr/>
      <Editor/>
    </div>
  );
}

export default App;
