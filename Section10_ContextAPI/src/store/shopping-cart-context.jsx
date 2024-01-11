//react 패키지에서 createContext를 import
import { createContext } from "react";

import { DUMMY_PRODUCTS } from "../dummy-products.js";

// 1.createContext 함수를 상수로 받아 줌.
// 2. createContext() 매개 값으로는 객체, 스트링, 배열 모두 들어갈 수 있다
// 3. 외부에서도 이 상수를 사용할 수 있도록 export 해준다.
//      (이후 CartContext로 해당 파일을 import 하게 됨)
// 4. 해당 context가 필요한 컴포넌트의 파일을 열고 Context로 감싸줘야한다.
//      (지금은 App.jsx로 이동하겠다.)
export const CartContext = createContext({
  items: [],
  //22. 빈 함수를 정의해 줌으로 써 context작성시 자동완성에 도움을 준다
  //다시 Product.jsx 파일로 이동
  addItemToCart: () => {},
});

export default function CartContextProvider({ children }) {
  //14. context 값으로 변경해줄 state를 context에 쓸 값으로 초기화 시켜준다.
  //Tip : 객체를 넣으면 동적으로 사용할 수 있게된다.
  const [shoppingCart, setShoppingCart] = useState({
    items: [],
  });

  function handleAddItemToCart(id) {
    setShoppingCart((prevShoppingCart) => {
      const updatedItems = [...prevShoppingCart.items];

      const existingCartItemIndex = updatedItems.findIndex(
        (cartItem) => cartItem.id === id
      );
      const existingCartItem = updatedItems[existingCartItemIndex];

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1,
        };
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        const product = DUMMY_PRODUCTS.find((product) => product.id === id);
        updatedItems.push({
          id: id,
          name: product.title,
          price: product.price,
          quantity: 1,
        });
      }

      return {
        items: updatedItems,
      };
    });
  }

  function handleUpdateCartItemQuantity(productId, amount) {
    setShoppingCart((prevShoppingCart) => {
      const updatedItems = [...prevShoppingCart.items];
      const updatedItemIndex = updatedItems.findIndex(
        (item) => item.id === productId
      );

      const updatedItem = {
        ...updatedItems[updatedItemIndex],
      };

      updatedItem.quantity += amount;

      if (updatedItem.quantity <= 0) {
        updatedItems.splice(updatedItemIndex, 1);
      } else {
        updatedItems[updatedItemIndex] = updatedItem;
      }

      return {
        items: updatedItems,
      };
    });
  }

  // 16. Provider value에 넣을 객체에 state와 state를 업데이트 해주는 함수를 같이 넣어 Provider로 하위 component에 전달해 준다
  // 17. context에 전달되는 업데이트 함수를 Product.jsx 파일에서 사용해 보겠다.
  const ctxValue = {
    items: shoppingCart.items,
    addItemToCart: handleAddItemToCart,
  };

  return (
    <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
  );
}
