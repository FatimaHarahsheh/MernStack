import logo from './logo.svg';
import './App.css';
import { Router } from '@reach/router';
import Main from './views/Main';
import Edit from './views/Edit';
import Create from './views/Create';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/" />
        <Create path="/new" />
        <Edit path=":id/edit" />
      </Router>

    </div>
  );
}

export default App;
