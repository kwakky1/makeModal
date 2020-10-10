import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Modal from "./components/Modal";

const App = () => {
  const [open, setOpen] = useState(false)
  const [startSession] = useState(JSON.parse(sessionStorage.getItem('start')))
  const [endSession] = useState(JSON.parse(sessionStorage.getItem('end')))

  const openModal = () => {
    setOpen(!open)
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={openModal}>모달나와라</button>
        <Modal openModal={open} setClose={(value)=>(setOpen(value))}/>
        <h1>{startSession}</h1>
        <h1>{endSession}</h1>
      </header>
    </div>
  );
}

export default App;
