import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import BoxForm from './componenets/BoxForm';
import DisplayBox from './componenets/DisplayBox'
function App() {
  const[displayf,setdisplayf]= useState([])
  const m =(transfer) => {setdisplayf(displayf.concat(transfer))}
  return (
      <>
        <BoxForm  lift={m} />
        <DisplayBox  o={displayf} />
      </>  
  );
}
export default App;
