import Header from './components/Header.jsx';
import Shop from './components/Shop.jsx';
//5. context로 감싸기위해 CartContext를 import[hader와 shop component를 감쌀 예정]
import CartContextProvider from './store/shopping-cart-context.jsx';
import { DUMMY_PRODUCTS } from './dummy-products.js';

function App() {

 


  return (
    //CartContext.Provider는 react 패키지에서 만들어진 속성이다.
    //Provider는 제공자라는 뜻으로 context를 사용하는 범위를 지정할 때 사용한다
    //6. Cart.jsx 파일로 이동하여 component내부에서 context를 사용 한다.
    //13. value를 추가하여 실제로 사용될 객체를 넣어준다
    //15. value의 값을 state로 바꾸어 context와 state를 연결한다
    <CartContextProvider>
      <Header/>
      <Shop>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} onAddToCart={addItemToCart} />
          </li>
        ))}
      </Shop>
    </CartContextProvider>
  );
}

export default App;
