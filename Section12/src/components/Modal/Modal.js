import React, { StrictMode, useContext } from "react";
import styles from "./Modal.module.css";
import CartItem from "../Cart/CartItem";
import ModalFooter from "./ModalFooter";
import CartContext from "../../store/cart-context";

const Modal = (props) => {

  const cartCtx = useContext(CartContext);

  let items = props.items;

  let totalAmount = 0;

  items.map((item) => {
    totalAmount = totalAmount + parseFloat(item.qty) * parseFloat(item.price);
  });

  const plusAmountCountHandler = (item) => {
    cartCtx.onAddCart(item);
  };

  const minusAmountCountHandler = (item) => {
    cartCtx.onRemoveCart(item);
  };

  return (
    <StrictMode>
      <div className={styles["backdrop"]}>
        <div className={styles["modal"]}>
          {items.map((item, key) => (
            <CartItem
              item={item}
              key={key}
              plusClick={plusAmountCountHandler}
              minusClick={minusAmountCountHandler}
            ></CartItem>
          ))}
          <ModalFooter totalAmount={totalAmount}></ModalFooter>
        </div>
      </div>
    </StrictMode>
  );
};

export default Modal;
