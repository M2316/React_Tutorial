import React, { useReducer, useState } from "react";

const CartContext = React.createContext({
    onAddCart:()=>{}
});


const cartReducer = (state,action)=>{
    
    switch(action.type){
        case "initCart":{
            return [action.payload]
        }

        case "addCart":{
            state.map(item=>{
                if(item.id === action.payload.id){
                    item.qty = (item.qty*1) + (action.payload.qty*1);
                }
            });
            return [state]
        }
        
    }
}

export const CartContextProvider = (props)=>{

    const [cartState,cartDispatch] = useReducer(cartReducer,[]);



    
    

    const addCartList = (item)=>{
        cartDispatch({type:"addCart",payload:item});
    }
    const initCartList = (item)=>{
        cartDispatch({type:"initCart",payload:item});
    }
    
    return(
        <CartContext.Provider value={{
            onInitCart:initCartList,
            onAddCart:addCartList,
            cartList:cartState
        }}>
        {props.children}
        </CartContext.Provider>
    );
}



export default CartContext;



