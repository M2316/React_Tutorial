import classes from './CartItem.module.css';

const CartItem = (props) => {

  let item = props.item;


  const plusClickHandler = ()=>{
    props.plusClick(item); 
  }

  const minusClickHandler = ()=>{
    props.minusClick(item); 
  }
  
  const price = `$${item.price.toFixed(2)}`;


  return (
    <li className={classes['cart-item']} style={{display:parseInt(item.qty) >= 1?"":"none"}}>
      <div>
        <h2>{item.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {item.qty}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={minusClickHandler}>−</button>
        <button onClick={plusClickHandler}>+</button>
      </div>
    </li>
  );
};

export default CartItem;