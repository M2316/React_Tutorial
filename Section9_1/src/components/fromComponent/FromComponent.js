import React, { useState } from "react";
import InputRowGroup from "./InputRowGroup";

import ButtonGroup from "./ButtonGroup";

export default function FromComponent(props) {


  const [inputValues,setInputValues] = useState(null);




  //state값 수정하기
  const inputChangeHandler = e => {
    setInputValues(
      { ...inputValues,
        [e.target.name]:e.target.value}
    );
  }
  

  //state보내기
  const submitHandler=e=>{
    e.preventDefault();
    props.onSubmitHandler(inputValues);
  }
  

  
  return (
    <form onSubmit={submitHandler} className="FormComponent">
      <InputRowGroup>
        <label>Username</label>
        <input name="userName" onChange={inputChangeHandler}/>
      </InputRowGroup>
      <InputRowGroup>
        <label>Age(Years)</label>
        <input name="userAge" onChange={inputChangeHandler}/>
      </InputRowGroup>
      <ButtonGroup></ButtonGroup>
    </form>
  );
}
