import React, { Fragment, useContext } from "react";
import styles from './ModalFooter.module.css'
import CartContext from "../../store/cart-context";


const ModalFooter = ({totalAmount}) => {

  const cartCtx = useContext(CartContext);
  
  const closeHandler = ()=>{
    cartCtx.onChangeFlagHandler(false);
  }


  const orderHandler = ()=>{
    alert(cartCtx.cartCount + "건 주문 되었습니다.");
    return null;
  }

  return (
    <div>
      <div className={styles["footer-summary"]}>
        <h3>Total Amount</h3>
        <h3>{`$${totalAmount.toFixed(2)}`}</h3>
      </div>
      <div className={styles["footer-button-box"]}>
        <button className={styles["footer-close"]} onClick={closeHandler}>Close</button>
        <button className={styles["footer-order"]} onClick={orderHandler}>Order</button>
      </div>
    </div>
  );
};

export default ModalFooter;
