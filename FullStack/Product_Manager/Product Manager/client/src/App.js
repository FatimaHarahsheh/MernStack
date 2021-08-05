import './App.css';
import { Router } from '@reach/router';
import React from 'react';
import Main from './views/main';
import Info from './views/info';
import Edit from './views/edit';

function App() {
  return (
    <div className="flexBox">
      <Router>
        <Main path ="/" />
        <Info  path="/:id" />
        <Edit path="/:id/edit" />
      </Router>

    </div>
  );
}

export default App;
