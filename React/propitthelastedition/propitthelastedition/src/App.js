import React from 'react';
import './App.css';
import PersonCard from './component/PersonCard';
function App() {
  return (
    <div className="one">
      <PersonCard firstName = "Doe" lastName  = "jane" age={45} haircolor = "Black"  />
      <PersonCard firstName = "Smith" lastName  = "John" age={88} haircolor = "Brown"  />
      <PersonCard firstName = "Fillmore" lastName  = "Millard" age={50} haircolor = "Brown"  />
      <PersonCard firstName = "Smith" lastName  = "Maria" age={62} haircolor = "Brown"  />

     
    </div>
  );
}

export default App;
