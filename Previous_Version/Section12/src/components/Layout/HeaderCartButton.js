import React, { useContext, useEffect, useState } from "react";
import styles from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";

const HeaderCartButton = () => {
  const cartCtx = useContext(CartContext);

  const modalOpenHandler = ()=>{
    cartCtx.onChangeFlagHandler(true);
  }
  
  

  return (
    <div className={styles.button} onClick={modalOpenHandler}>
      <div>
        <img
          className={styles.icon}
          src="https://cdn-icons-png.flaticon.com/512/872/872243.png"
        />
      </div>
      <div className={styles.bump}>Your Cart</div>
      <div className={styles.badge}>
        <span>{cartCtx.cartCount}</span>
      </div>
    </div>
  );
};

export default HeaderCartButton;
