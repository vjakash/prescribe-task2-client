import React,{useState} from 'react';
import './App.css';

import io from "socket.io-client";
const socket = io("http://localhost:4000");

function App() {
  const [isButton1Disabled, setIsButton1Disabled] = useState(false);
  socket.on('changeButton',()=>{
    // console.log('changeButton')
    setIsButton1Disabled(!isButton1Disabled);
  })
  function emitEvent(){
    socket.emit('disableAlternate');
  }
  return (
    <div className="App">
     <button disabled={isButton1Disabled} onClick={emitEvent}>Button 1</button> &nbsp;&nbsp;&nbsp;
     <button disabled={!isButton1Disabled} onClick={emitEvent}>Button 2</button>
    </div>
  );
}

export default App;
