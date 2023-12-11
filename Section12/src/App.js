import React, { Fragment, useContext, useEffect } from "react";
import Header from "./components/Layout/Header";
import MealsSummary from "./components/Meals/MealsSummary";
import AvailableMeals from "./components/Meals/AvailableMeals";
import Modal from "./components/UI/Modal"

import DummyContext from "./store/dummy-context";
import CartContext from "./store/cart-context";





const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];

function App() {

  const cartCtx = useContext(CartContext);

  const dummyCtx = useContext(DummyContext);


  

  useEffect(()=>{
    dummyCtx.changeDummy(DUMMY_MEALS);
  },[]);

  
  

  return (
    <Fragment>
      <Header></Header>
      
      <MealsSummary></MealsSummary>
      <AvailableMeals></AvailableMeals>
      {cartCtx.modalFlag && <Modal items={cartCtx.cartList}></Modal>}
    </Fragment>
  );
}

export default App;
