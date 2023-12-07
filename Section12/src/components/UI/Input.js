import React from "react";
import styles from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={styles.input}>
      <label>{props.label}</label>
      <input name={props.label} />
    </div>
  );
};

export default Input;
