import React, { useState } from "react";

import "./App.css";


import FromComponent from "./components/fromComponent/FromComponent";
import ItemsComponent from "./components/itemsComponent/ItemsComponent";

function App() {


  const [items, setItems] = useState("");
  const [modalFlag, setModalFlag] = useState({flag:false,msg:""});

  const submitHandler = preveItems => {
    if(preveItems){
      if(preveItems.userName.length === 0 && preveItems.userAge.length === 0){
        setModalFlag({flag:true,msg:"non-empty values"});
        return;
      }else if(preveItems.userAge < 0){
        setModalFlag({flag:true,msg:"정수만 입력 가능!!! "});
        return;
      }
  
      setItems([...items, preveItems]);
      console.log(items);
    }else{
      setModalFlag({flag:true,msg:"non-empty values"});
        return;
    }
    
  }

  const modalCloseHandler = e=>{
    setModalFlag({...modalFlag,'flag':false})
  }



  return (
    <div className="App">
      <header className="App-header">
        <FromComponent onSubmitHandler={submitHandler}></FromComponent>
        {items && <ItemsComponent datas={items}></ItemsComponent>}




      </header>
      <div className="ModalComponent" style={{display:modalFlag['flag']?'flex':'none'}}>
        <div className="ModalWrap">
          <div className="ModalHeader">
            <span>Invalid input</span>
          </div>
          <div className="ModalBody">
            <span>Please enter a valid name and age ({modalFlag['msg']})</span>
          </div>
          <div className="ModalFooter" onClick={modalCloseHandler}>
            <button>Okay</button>
          </div>
        </div>

      </div>

    </div>
  );
}

export default App;
