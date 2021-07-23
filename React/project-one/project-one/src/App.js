import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';


class App extends Component {    
  render(){        
      return (            
          <>                
              <h1>Hello Coding Dojo</h1>                
              <p>Things I need to do :</p> 
              <ul>
                  <li>Learn React</li>
                  <li>Climb Mt Everest</li>
                  <li>Run A Marathon</li>
                  <li>Feed The Dogs</li>
                </ul>           
          </>        
      );    
  }
}
export default App;
