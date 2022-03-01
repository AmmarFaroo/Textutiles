import "./App.css";
// import About from "./componenets/About";
import Navbar from "./componenets/Navbar";
import TextFoam from "./componenets/TextFoam";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("light"); //Wather dark mode is enable or not

  const toggleMode = () => {
    if (mode === "light") {
      setMode ("dark"); 
      document.body.style.backgroundColor = 'black';
    }
    else  {
      setMode  ("light");
      document.body.style.backgroundColor = 'white';
    }
  };
  return (
    <>
      {/* Navbar title = "TextUtiles" aboutText = "About TextUtiles" */}
      {/* <Navbar  /> */}
      <Navbar title="TextUtiles" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <TextFoam heading="Enter the text to anaylze below" />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
