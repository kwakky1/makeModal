import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Modal from "./components/Modal";

const App = () => {
  const [handle, setHandle] = useState(false)
  const startSession = JSON.parse(sessionStorage.getItem('start'))
  const endSession = JSON.parse(sessionStorage.getItem('end'))

  const [startResult, setStartResult] = useState('')
  const [endResult, setEndResult] = useState('')

  useEffect(()=>{
    setStartResult(startSession)
    setEndResult(endSession)
  },[startSession, endSession])

  const openModal = () => {
    setHandle(!handle)
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={openModal}>모달나와라</button>
        <Modal handle={handle} setHandle={(value)=>(setHandle(value))}/>
        <h1>{startResult}</h1>
        <h1>{endResult}</h1>
      </header>
    </div>
  );
}

export default App;
