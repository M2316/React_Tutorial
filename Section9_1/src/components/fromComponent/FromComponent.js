import React, { useState } from "react";
import styles from './FromComponent.module.css';
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
    <form onSubmit={submitHandler} className={`${styles.FormComponent}`}>
      <InputRowGroup>
        <label htmlFor="userName">Username</label>
        <input type="text" id="userName" name="userName" onChange={inputChangeHandler}/>
      </InputRowGroup>
      <InputRowGroup>
        <label htmlFor="userAge">Age(Years)</label>
        <input type="number" id="userAge" name="userAge" onChange={inputChangeHandler}/>
      </InputRowGroup>
      <ButtonGroup></ButtonGroup>
    </form>
  );
}
