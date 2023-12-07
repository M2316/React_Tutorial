import React from "react";
import styles from "./MealsItem.module.css";
import MealsItemForm from "./MealsItemForm"
const MealsItem = (props) => {
  return (
    <div>
      <div className={styles.meal}>
        <div>
          <h3>{props.item.title}</h3>
          <div className={styles.description}>{props.item.desc}</div>
          <div className={styles.price}>{props.item.price}</div>
        </div>
        <MealsItemForm></MealsItemForm>
      </div>
    </div>
  );
};

export default MealsItem;
