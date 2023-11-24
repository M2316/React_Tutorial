import React, { useState } from "react";
import InputGroupRow from "./InputGroupRow";
import InputButtonGroup from "./InputButtonGroup";

import style from "./FormComponent.css";


const initiaUserInput = {
    currentSavings : 0,
    yearlySavings : 0,
    expectedReturn : 0,
    duration : 0
}


export default function FormComponent(props) {

    const [inputValue,setInputValue] = useState(initiaUserInput);



    const InputChangeEventHandler = (e)=>{

        setInputValue((inputValue)=>{
            return {
                ...inputValue,
                [e.target.id]:e.target.value
            };
        });
        
    }

    const submitHandler = e =>{
        e.preventDefault();
        props.onCalculateHandler(inputValue);
        return;
    }
    
    const resetHandler = e =>{
        setInputValue(initiaUserInput);
        
        props.onCalculateHandler({});
    }


    return (
        <form className="form" onSubmit={submitHandler} onReset={resetHandler}>
            <InputGroupRow leftText={"Current Savings  ($)"} leftId={"current-savings"} rightText={"Yearly Savings ($)"} rightId={"yearly-contribution"} onChangeHandler={InputChangeEventHandler}></InputGroupRow>
            <InputGroupRow leftText={"Expected Interest (%, per year)"} leftId={"expected-return"} rightText={"Investment Duration (years)"} rightId={"duration"} onChangeHandler={InputChangeEventHandler}></InputGroupRow>
            <InputButtonGroup onSubmitHandler={submitHandler} onRestHandler={resetHandler}></InputButtonGroup>
        </form>

    );
}