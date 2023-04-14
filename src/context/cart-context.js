import { createContext, useContext, useState } from "react"
import { useProducts } from "./product-context";

export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const {productsArray} = useProducts();
    const [cartArray, setCartArray] = useState([]);

    const addToCart = addItemId => setCartArray([...cartArray, productsArray.find(({id}) => id === addItemId)])

    return <CartContext.Provider value={{addToCart, cartArray}}>
        {children}
    </CartContext.Provider>
}

export const useCart = () => useContext(CartContext);