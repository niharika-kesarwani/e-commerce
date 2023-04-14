import { createContext, useContext, useState } from "react"
import { useProducts } from "./product-context";

export const WishlistContext = createContext();

export const WishlistProvider = ({children}) => {

    const { productsArray } = useProducts();
    const [wishlistArray, setWishlistArray] = useState([]);

    const addToWishlist = addItemId => setWishlistArray([productsArray.find(({id}) => id === addItemId), ...wishlistArray]);

    const removeFromWishlist = removeItemId => setWishlistArray(wishlistArray.filter(({id}) => id !== removeItemId));

    return <WishlistContext.Provider value={{wishlistArray, addToWishlist, removeFromWishlist}}>
        {children}
    </WishlistContext.Provider>
}

export const useWishlist = () => useContext(WishlistContext);