//8. Context API를 사용하기 위해 react에서 제공하는 useContext훅을 import
// (useContext훅은 모든 함수에서 Context값에 접근할 수 있도록 해주는 훅 이다.)
import { useContext } from "react";
//7. CartContext를 사용하기 위해 import
import { CartContext } from "../store/shopping-cart-context";

//10. cartCtx가 props를 대신해 주기 때문에 필요없는 props는 삭제 했습니다.
export default function Cart({onUpdateItemQuantity }) {

  //8. 컨택스트에 접근할 수 있게 해주는 useContext훅을 이용하여
  //7번에서 import한 CartContext파일을 매개변수로 넘겨준다.
  //이것을 상수로 받고 상수를 사용하여 Cart컴포넌트 안에서 CartContext로 접근이 가능해 진다.
  const cartCtx = useContext(CartContext);

  //팁! Tip!!
  // const {items} = useContext(CartContext);
  //javascript destructuring를 이용하면 context객체 내부의 값만 빼올 수 있다


  //11. 여기도 cartCtx를 이용하여 items에 접근 함
  //12. 이렇게 하면 모든 설정을 끝났지만 초기 값을 주는 부분이 없기 때문에 저장하고 나면 오류가 발생된다.
  //현재 shopping-cart-context에 있는 items는 context의 틀 이라고 생각하면 된다
  // 때문에 실질적인 값이 들어가 있지 않기 때문에 Provider부분에서 실제로 사용할 값을 value로 넘겨 주어야 한다
  // App.jsx로 다시 이동
  const totalPrice = cartCtx.items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;

  return (
    <div id="cart">
      {/* 9. cartCtx안에는 shopping-cart-context.jsx에서 넣어준 객체에 접근이 가능해 진다 */}
      {/* 그렇기 때문에 객체 안의 items 배열 또한 접근이 가능한 것이다. */}
      {cartCtx.items.length === 0 && <p>No items in cart!</p>}
      {cartCtx.items.length > 0 && (
        <ul id="cart-items">
          {cartCtx.items.map((item) => {
            const formattedPrice = `$${item.price.toFixed(2)}`;

            return (
              <li key={item.id}>
                <div>
                  <span>{item.name}</span>
                  <span> ({formattedPrice})</span>
                </div>
                <div className="cart-item-actions">
                  <button onClick={() => onUpdateItemQuantity(item.id, -1)}>
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => onUpdateItemQuantity(item.id, 1)}>
                    +
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      <p id="cart-total-price">
        Cart Total: <strong>{formattedTotalPrice}</strong>
      </p>
    </div>
  );
}
