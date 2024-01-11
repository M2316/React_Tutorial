# Context API

<br><br><br>
# 사용하는 이유
Context API는 React에서 사용하는 상태 관리를 전역적으로 관리할 수 있기 때문에
State 사용시 복잡한 props drilling 링으로 인한 개발 어려움을 극복할 수 있게 해준다.<br><br>
Context API처럼 전역적인 state를 관리하는 도구가 없다면 컴포넌트의 댑스가 깊어질 수 록 props drilling을 통해 마지막 자식까지 state 값을 전달해 주어야 하기 때문에 불필요한 코드도 늘어날 뿐만 아니라 개발의 복잡성도 올라간다.<br><br>
전역으로 state를 관리해 주기 때문에 모든 state를 전역 state 관리툴을 이용하여 관리하게 되면 코드의 성능 부분에서 이슈가 생길 수 있다. 때문에 적절한 곳에 사용해야할 필요성이 있다.

> ## 3줄 요약
> - Context API를 사용하면 props drilling을 피할 수 있다.
> - props drilling을 피함으로 가독성을 높이고 복잡성을 낮출 수 있다.
> - Context API를 남발하면 코드의 성능이 떨어질 수 있기 때문에 적절한 곳에 사용해야 한다.

<br><br><br>
# 사용방법

### 1. Context Store폴더와 Context파일 만들기
Context API는 전역적으로 state를 관리하기 때문에 component의 귀속되지 않고 개별 파일로 관리 된다.
- 개발중인 프로젝트 src 폴더 하위에 store또는 저장공간을 의미하는 폴더를 만들어준다
- 범용 적으로는 store라는 명으로 많이 사용된다.
- store폴더에 OOO-context.jsx 또는 OOO-context.js 파일을 생성한다
- 내부에는 react 패키지에서 createContext를 import한다.
- 이후 아래 코드의 주석 참조 참조
<br><br>


> # shopping-cart-context.jsx 파일
```jsx
//react 패키지에서 createContext를 import
import {createContext} from 'react'


// 1.createContext 함수를 상수로 받아 줌.
// 2. createContext() 매개 값으로는 객체, 스트링, 배열 모두 들어갈 수 있다
// 3. 외부에서도 이 상수를 사용할 수 있도록 export 해준다. 
//      (이후 CartContext로 해당 파일을 import 하게 됨)
// 4. 해당 context가 필요한 컴포넌트의 파일을 열고 Context로 감싸줘야한다.
//      (지금은 App.jsx로 이동하겠다.)
export const CartContext = createContext({
    items:[]
});


```


> # App.jsx 파일
``` jsx
...
//5. context로 감싸기위해 CartContext를 import[hader와 shop component를 감쌀 예정]
import { CartContext } from './store/shopping-cart-context.jsx'; 

function App() {

    ...

  return (
    //CartContext.Provider는 react 패키지에서 만들어진 속성이다.
    //Provider는 제공자라는 뜻으로 context를 사용하는 범위를 지정할 때 사용한다
    //6. Cart.jsx 파일로 이동하여 component내부에서 context를 사용 한다.
    <CartContext.Provider>
      <Header
        cart={shoppingCart}
        onUpdateCartItemQuantity={handleUpdateCartItemQuantity}
      />
      <Shop onAddItemToCart={handleAddItemToCart} />
    </CartContext.Provider>
  );
};


```

> # Cart.jsx 파일
``` jsx
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



```


> # App.jsx 파일
```jsx
  return (
    //CartContext.Provider는 react 패키지에서 만들어진 속성이다.
    //Provider는 제공자라는 뜻으로 context를 사용하는 범위를 지정할 때 사용한다
    //6. Cart.jsx 파일로 이동하여 component내부에서 context를 사용 한다.
    //13. value를 추가하여 실제로 사용될 객체를 넣어준다
    <CartContext.Provider value={{items:[]}}>
      <Header
        cart={shoppingCart}
        onUpdateCartItemQuantity={handleUpdateCartItemQuantity}
      />
      <Shop onAddItemToCart={handleAddItemToCart} />
    </CartContext.Provider>
  );

```

> # App.jsx 파일
```jsx
function App() {
  //14. context 값으로 변경해줄 state를 context에 쓸 값으로 초기화 시켜준다.
  //Tip : 객체를 넣으면 동적으로 사용할 수 있게된다.
  const [shoppingCart, setShoppingCart] = useState({
    items: [],
  });

  ...

    return (
    //15. value의 값을 state로 바꾸어 context와 state를 연결한다
    //이렇게하면 조회하는 것에는 문제가 없다 하지만 state를 업데이트 하지 못하는 문제점이 있다.
    //다음 스탭에서 context의 값을 업데이트 하는것을 설명 하겠다.
    <CartContext.Provider value={{...shoppingCart}}>
      <Header
        cart={shoppingCart}
        onUpdateCartItemQuantity={handleUpdateCartItemQuantity}
      />
      <Shop onAddItemToCart={handleAddItemToCart} />
    </CartContext.Provider>
  );
}

```

> # App.jsx 파일
```jsx

...
// 16. Provider value에 넣을 객체에 state와 state를 업데이트 해주는 함수를 같이 넣어 Provider로 하위 component에 전달해 준다
// 17. context에 전달되는 업데이트 함수를 Product.jsx 파일에서 사용해 보겠다.
  const ctxValue = {
    items:shoppingCart.items,
    addItemToCart:handleAddItemToCart
  };
...

```

> # Product.jsx 파일
```jsx
//18. CartContext와 useContext훅을 import!
import { CartContext } from "../store/shopping-cart-context";
import { useContext } from "react";

//19. props 에 있는 onAddCart는 필요 없기 때문에 주석처리 해준다
export default function Product({
  id,
  image,
  title,
  price,
  description,
  //onAddToCart,
}) {

  //20.CartContext를 사용할 수 있게 useContext로 context값을 반환하는 상수 생성
  //21. 간편한 destructuring을 제공하기 위해 shopping-cart-context.jsx로 이동
  const { addItemToCart,items } = useContext(CartContext);


  return (
    ...
  );
}

```

> # shopping-cart-context.jsx 파일
```jsx
export const CartContext = createContext({
    items:[],
    //22. 빈 함수를 정의해 줌으로 써 context작성시 자동완성에 도움을 준다
    //다시 Product.jsx 파일로 이동
    addItemToCart:()=>{},
});
```

> # Product.jsx 파일
```jsx

export default function Product({
  id,
  image,
  title,
  price,
  description
}) {

...

  return (
    <article className="product">
      <img src={image} alt={title} />
      <div className="product-content">
        <div>
          <h3>{title}</h3>
          <p className='product-price'>${price}</p>
          <p>{description}</p>
        </div>
        <p className='product-actions'>
          {/* 23. context로 가져온 addItemToCart함수를 통해 상태 업데이트가 가능해 짐 */}
          {/* context 사용법 끝! */}
          <button onClick={() => addItemToCart(id)}>Add to Cart</button>
        </p>
      </div>
    </article>
  );
}

```
<br><br><br>
# 기타 사용방법
> Consumer를 이용하여 Context를 사용할 수 있지만 해당 코드는 jsx의 가독성을 떨어트리기 때문에 주로 사용되지 않는다. 
> <br>Consumer를 사용하는 프로젝트를 만났을 떄 당황하지 않기위해 Consumer를 사용하는 방법이 있다는 정도만 인지하면 될 것으로 보인다. 

## Consumer간단 예시 
### Cart.jsx 파일
```jsx

...

export default function Cart({onUpdateItemQuantity }) {

  ...

  return (
    <CartContext.Consumer>
        {(cartCtx)=>{
            <div id="cart">
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
        }}
    </CartContext.Consumer>
  );
}
```


