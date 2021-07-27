import logo from './logo.svg';
import './App.css';
import MyComponents from './Components/MyComponents';
import Palents from './Components/Palents';
import Pepole from './Components/Pepole';
import { Router } from '@reach/router';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyComponents />
          <Router>
            <Pepole path="/people/:id" />
            <Palents path="/plantes/:id" />
          </Router>
      </header>
    </div>
  );
}

export default App;
