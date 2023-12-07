import React, { useContext } from "react";
import styles from "./MealsItemForm.module.css";
import Input from "../UI/Input";


const MealsItemForm = (props) => {
  



  return (
    <form className={styles.form} onSubmit={props.onAddCart}>
      <Input label={"Amount"} name={"amount"} type={"number"}></Input>
      <button type="submit" >+Add</button>
    </form>
  );
};

export default MealsItemForm;
