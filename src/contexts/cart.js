import { createContext, useState } from "react";

export const CartContext = createContext({
  cartItems: [],
  setCartItems: () => {},
  addProductToCart: () => {},
});

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addProductToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        addProductToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
