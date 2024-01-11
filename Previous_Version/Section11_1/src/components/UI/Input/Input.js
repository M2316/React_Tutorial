import React,{useRef,useImperativeHandle} from "react";

import classes from "./Input.module.css";

const Input = React.forwardRef((props,ref) => {
  const inputRef = useRef();

  const activate = () =>{
    inputRef.current.focus();
  }

  useImperativeHandle(ref, ()=>{
    return {
      focus: activate
    }
  });
  return (
    <div
      className={`${classes.control} ${
        props.item.isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={props.inputId}>{props.item.label}</label>
      <input
      ref={inputRef}
        type={props.item.type}
        id={props.item.inputId}
        value={props.item.value}
        onChange={props.item.onChange}
        onBlur={props.item.onBlur}
      />
    </div> 
  );
});

export default Input;
