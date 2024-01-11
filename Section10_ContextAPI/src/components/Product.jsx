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
