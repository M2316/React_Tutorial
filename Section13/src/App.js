import React, { useCallback, useState } from 'react';
import Button from './components/UI/Button/Button'
import './App.css';
import DemoOutput from './components/Demo/DemoOutput';


function App() {

  const [showParagraph,setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  const toggleParagraphHandler = useCallback(()=>{
    if(allowToggle){
      setShowParagraph((prevShowParagraph)=>!showParagraph);
    }

  },[allowToggle]);

  const allowToggleHandler = ()=>{
    setAllowToggle(true);
  }

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph}></DemoOutput>
      <Button onClick={allowToggleHandler}>Allow Toggling</Button>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
