import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import styles from './CourseInput.module.css';
// import styled from 'styled-components';


// const FormControl = styled.div`

//   margin: 0.5rem 0;


//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     color:${props => {return props.isvalid ? 'black' : 'red'}};
//     color:${props => {return props.isvalid ? 'black' : 'red'}};
//   }

//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid ${props=>(props.isvalid?'#ccc':'red')};
//     background: ${props =>(props.isvalid? 'transparent':'#ffd7d7')};
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }

//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
// }

// `;

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');

  const [inValid, setInValid] = useState(false);

  const goalInputChangeHandler = event => {

    if(event.target.value.trim().length > 0){
      setInValid(false);
    }
    
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();

    if(enteredValue.trim().length===0){
      setInValid(true);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control"> 
        <label style={{color: isValid?'black':'red'}}>Course Goal</label>
        <input type="text" style={{borderColor:isValid?'#ccc':'red', background:isValid?'transparent':'salmon'}} onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
