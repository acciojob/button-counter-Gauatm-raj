
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

  const [counter,setState]= useState(0);

   const clicked=()=>{
     setState((prev)=>prev+1)
   }
  return (
    <div>
      <p style={{ fontWeight: "bold"}}>Button clicked {counter} times</p>
      <button onClick={clicked}>Click me</button>
      
    </div>
  )
}

export default App
