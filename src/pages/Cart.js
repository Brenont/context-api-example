import React, { useContext } from "react";
import { CartContext } from "../contexts/cart";

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div>
      <h3>Cart Page</h3>
      <h4>Products added to cart:</h4>
      {cartItems.map((product, index) => (
        <p>
          {index + 1} - {product.name}
        </p>
      ))}
    </div>
  );
};

export default Cart;
