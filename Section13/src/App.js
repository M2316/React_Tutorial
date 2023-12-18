import React, { useCallback, useState } from 'react';
import Button from './components/UI/Button/Button'
import './App.css';
import DemoOutput from './components/Demo/DemoOutput';


function App() {

  const [showParagraph,setShowParagraph] = useState();

  const toggleParagraphHandler = useCallback(()=>{
    setShowParagraph((prevShowParagraph)=>!showParagraph);

  },[]);
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={false}></DemoOutput>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
