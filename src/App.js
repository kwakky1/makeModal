import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Modal from "./components/Modal";

const App = () => {
  const [open, setOpen] = useState(false)

  const openModal = () => {
    setOpen(!open)
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={openModal}>모달나와라</button>
        <Modal openModal={open} setClose={(value)=>(setOpen(value))}/>
      </header>
    </div>
  );
}

export default App;
