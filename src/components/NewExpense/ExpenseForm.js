import "./ExpenseForm.css"
import {useState} from "react";
import ExpenseFormItem from "./ExpenseFormItem";
import ExpenseFormItemBtn from "./ExpenseFormItemBtn";

const ExpenseForm = (props)=>{

    const [enteredTitle,setEnteredTitle] = useState('');
    const [enteredAmount,setEnteredAmount] = useState('');
    const [enteredDate,setEnteredDate] = useState('');

    const [formFlag,setFormFlag] = useState(false);

    const inputChangeHandler = (flag,value)=>{
        switch(flag){
            case "title":
                setEnteredTitle(value);
                return;
            case "amount":
                setEnteredAmount(value);
                return;
            case "date":
                setEnteredDate(value);
                return;
            default :
                return;
        }
    }

    const submitHandler = (e)=>{
        e.preventDefault();
        const formValue = {
            title : enteredTitle,
            amount : enteredAmount,
            date : new Date(enteredDate)
        }
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        props.onSaveExpenseData(formValue);
    }

 
    const clickNewExpenseFromOpen = prevFlag =>{
        setFormFlag(true);
    }

    const clickNewExpenseFromClose = prevFlag =>{
        setFormFlag(false);
    }

    return (
        <form onSubmit={submitHandler}>
            <ExpenseFormItem enteredTitle={enteredTitle} enteredAmount={enteredAmount} enteredDate={enteredDate} onInputChangeHandler={inputChangeHandler} formFlag={formFlag}/>
            <ExpenseFormItemBtn onClickNewExpenseFromOpen={clickNewExpenseFromOpen} formFlag={formFlag} onClickNewExpenseFromClose={clickNewExpenseFromClose}/>
        </form>
    );




}

export default ExpenseForm;