import React from "react";
import styles from "./HeaderCartButton.module.css";

const HeaderCartButton = () => {
  return (
    <div className={styles.button}>
      <div>
        <img
          className={styles.icon}
          src="   https://cdn-icons-png.flaticon.com/512/872/872243.png"
        />
      </div>
      <div className={styles.bump}>Your Cart</div>
      <div className={styles.badge}>
        <span>0</span>
      </div>
    </div>
  );
};

export default HeaderCartButton;
