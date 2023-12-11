import React, { StrictMode, useContext } from 'react'
import styles from './Modal.module.css'
import CartItem from '../Cart/CartItem';
import ModalFooter from './ModalFooter';




const Modal = (props) => {
  let items = props.items;

  let totalAmount = 0;

  items.map((item)=>{
    totalAmount = totalAmount + (parseFloat(item.qty) * parseFloat(item.price));
  });


  return (
    <StrictMode>
    <div className={styles["backdrop"]}>
        <div className={styles["modal"]}>
            {items.map((item,key)=><CartItem item={item} id={key}></CartItem>)}
            <ModalFooter totalAmount={totalAmount}></ModalFooter>
        </div>
    </div>
    </StrictMode>
  )
}

export default Modal;