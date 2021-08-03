import './App.css';
import { Router } from '@reach/router';
import React from 'react';
import Main from './views/main';
import Info from './views/info';
function App() {
  return (
    <div className="flexBox">
      <Router>
        <Main path ="/" />
        <Info  path="/:id" />
      </Router>

    </div>
  );
}

export default App;
