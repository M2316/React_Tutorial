import React, { useContext, useEffect, useState } from "react";
import styles from "./MealsItem.module.css";
import MealsItemForm from "./MealsItemForm"
import CartContext from "../../store/cart-context";

const MealsItem = (props) => {

  const [item,setItem] = useState([]);

  useEffect(()=>{
    setItem(props.item);
  },[])
  
  const cartCtx = useContext(CartContext);


  const cartAddHandler = (event) => {
    event.preventDefault();
    let amount = parseInt(event.target.amount.value);
    for(let i=0;i<amount;i++){
      cartCtx.onAddCart({
        ...item
      });  
    }
    cartCtx.setCartCount(cartCtx.cartCount + amount);
  };


  return (
    <div>
      <div className={styles.meal}>
        <div>
          <h3>{props.item.name}</h3>
          <div className={styles.description}>{item.description}</div>
          <div className={styles.price}>{item.price}</div>
        </div>
        <MealsItemForm onAddCart={cartAddHandler}></MealsItemForm>
      </div>
    </div>
  );
};

export default MealsItem;
