import React, { useEffect, useReducer, useState } from "react";

const CartContext = React.createContext({
  cartList: [],
  onAddCart: () => {},
  modalFlag: false,
  onChangeFlagHandler: () => {},
  cartCount:0,
  setCartCount:()=>{}
});

const cartReducer = (state, action) => {
  switch (action.type) {
    case "addCart": {
      if (state.length === 0) {
        state = [{ ...action.payload, qty: 1 }];
        return state;
      }

      let equalFlag = false;

      state.map((item) => {
        if (item.id === action.payload.id) {
          item.qty = parseInt(item.qty) + 1;
          equalFlag = true;
        }
      });

      if (!equalFlag) {
        state = [
          ...state,
          {
            ...action.payload,
            qty: 1,
          },
        ];
      }
      return state;
    }
  }
};

export const CartContextProvider = (props) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, []);
  const [modalFlag, setModalFlag] = useState(false);
  const [cartCount, setCartCount] = useState(0)
  

  /**
   * 카트에 아이템 추가
   * @param {Object} item
   */
  const addCartList = (item) => {
    cartDispatch({ type: "addCart", payload: item });
  };

  const modalFlagChangeHandler = (flag) => {
    setModalFlag(flag);
  };

  return (
    <CartContext.Provider
      value={{
        onAddCart: addCartList,
        cartList: cartState,
        onChangeFlagHandler: modalFlagChangeHandler,
        modalFlag: modalFlag,
        cartCount:cartCount,
        setCartCount:setCartCount
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
