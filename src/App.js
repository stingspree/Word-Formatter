import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const toggleMode=()=>{
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='#003d66';
      document.body.style.color='white';
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
    }
  }
  const[mode,setMode]=useState('light')
  return (
    <>
      <Navbar title="StingSpree" mode={mode} toggleMode={toggleMode}/>
      <div className="container my-3">
        <TextForm heading="Enter the text to be analysed" mode={mode}/>
      </div>
      
    </>
  );
}

export default App;
