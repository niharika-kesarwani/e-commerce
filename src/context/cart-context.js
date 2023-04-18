import { createContext, useContext, useState } from "react";
import { useProducts } from "./product-context";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { productsArray } = useProducts();
  const [cartArray, setCartArray] = useState([]);

  const addToCart = (addItemId) =>
    setCartArray([
      productsArray.find(({ id }) => id === addItemId),
      ...cartArray,
    ]);

  const removeFromCart = (removeItemId) =>
    setCartArray(cartArray.filter(({ id }) => id !== removeItemId));

  return (
    <CartContext.Provider value={{ cartArray, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
