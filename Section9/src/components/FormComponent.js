import React, { useState } from "react";
import InputGroupRow from "./InputGroupRow";
import InputButtonGroup from "./InputButtonGroup";


export default function FormComponent(props) {


    const [currentSavings,setCurrentSavings] = useState("");
    const [yearlySavings,setYearlySavings] = useState("");
    const [expectedReturn,setExpectedReturn] = useState("");
    const [duration,setDuration] = useState("");

    
    
    const submitSavingInfo = e =>{
        // setSavingInfo("state");    
    }


    const InputChangeEventHandler = (e)=>{
        
        switch(e.target.id){
            case "current-savings":
                setCurrentSavings(e.target.value);
                break;
            case "yearly-contribution":
                setYearlySavings(e.target.value);
            break;
            case "expected-return":
                setExpectedReturn(e.target.value);
            break;
            case "duration":
                setDuration(e.target.value);
                break;
            }
    }

    const submitHandler = e =>{
        e.preventDefault();
        let items = {
            "currentSavings":currentSavings,
            "yearlySavings":yearlySavings,
            "expectedReturn":expectedReturn,
            "duration":duration
        }

        props.onCalculateHandler(items);
        return;
    }


    return (
        <form className="form" onSubmit={submitHandler}>
            <InputGroupRow leftText={"Current Savings  ($)"} leftId={"current-savings"} rightText={"Yearly Savings ($)"} rightId={"yearly-contribution"} onChangeHandler={InputChangeEventHandler}></InputGroupRow>
            <InputGroupRow leftText={"Expected Interest (%, per year)"} leftId={"expected-return"} rightText={"Investment Duration (years)"} rightId={"duration"} onChangeHandler={InputChangeEventHandler}></InputGroupRow>
            <InputButtonGroup onSubmitHandler={submitHandler}></InputButtonGroup>
            {
                /* <div className="input-group">
                <p>
                    <label htmlFor="current-savings"></label>
                    <input type="number" id="current-savings" />
                </p>
                <p>
                    <label htmlFor="yearly-contribution"></label>
                    <input type="number" id="yearly-contribution" />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="expected-return">
                        
                    </label>
                    <input type="number" id="expected-return" />
                </p>
                <p>
                    <label htmlFor="duration"></label>
                    <input type="number" id="duration" />
                </p>
            </div>
            <p className="actions">
                <button type="reset" className="buttonAlt">
                    Reset
                </button>
                <button type="submit" className="button">
                    Calculate
                </button>
            </p> */}
        </form>

    );
}