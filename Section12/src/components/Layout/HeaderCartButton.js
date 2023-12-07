import React, { useContext, useEffect, useState } from "react";
import styles from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";



const HeaderCartButton = () => {



  const [cartCount,setCartCount] = useState(0);

  

  const cartCtx = useContext(CartContext);
  
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
        <span>{cartCtx.cartList.length}</span>
      </div>
    </div>
  );
};

export default HeaderCartButton;
