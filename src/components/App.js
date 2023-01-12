import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  let [flag, setFlag] = useState(false);
  function change(){
    setFlag(true);
  }
  return (
    <>
    <div id="main">
      // Do not alter the main div
    </div>
    {/* <p id="para" className={flag ? "sho" : "hide"}>Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p> */}
    <button id="click" onClick={change}>show</button>
    </>
  );
}


export default App;
