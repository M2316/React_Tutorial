import React,{useState} from "react";

import "./App.css";


import FromComponent from "./components/fromComponent/FromComponent";
import ItemsComponent from "./components/itemsComponent/ItemsComponent";

function App() {


  const [items,setItems] = useState([]);

  const submitHandler = preveItems=>{
    
    setItems([...items,preveItems]);
    console.log(items);
  }



  return (
    <div className="App">
      <header className="App-header">
        <FromComponent onSubmitHandler={submitHandler}></FromComponent>
        {items&&<ItemsComponent datas={items}></ItemsComponent>}


        
        
      </header>
    </div>
  );
}

export default App;
