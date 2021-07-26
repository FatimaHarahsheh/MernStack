import './App.css';
import React from 'react';
import Home   from './Components/home';
import Number   from './Components/number';
import Word   from './Components/world';

import { Router } from '@reach/router';


function App() {
  return (
    <div className="App">
        <Router>
            <Home path="/home"/>
            <Number path="/:num"/>
            <Word path="/:word/:color/:back"/>

        </Router>
    </div>
  );
}
export default App;
