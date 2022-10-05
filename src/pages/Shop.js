import React, { useContext } from "react";
import { CartContext } from "../contexts/cart";

const productsData = [
  { name: "Cap", price: "$80" },
  { name: "T-Shirt", price: "$100" },
  { name: "Jacket", price: "$170" },
  { name: "Belt", price: "$60" },
];

const Shop = () => {
  const { addProductToCart } = useContext(CartContext);

  return (
    <div>
      <h3>Shop Page</h3>
      {productsData.map((product) => (
        <div
          key={product.name}
          style={{ margin: 10, border: "1px black solid" }}
        >
          <p>{product.name}</p>
          <p>{product.price}</p>
          <button onClick={() => addProductToCart(product)}>add to cart</button>
        </div>
      ))}
    </div>
  );
};

export default Shop;
