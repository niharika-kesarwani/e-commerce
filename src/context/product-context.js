import { createContext, useContext, useEffect, useState } from "react";
import { fakeFetch } from "../data/productsDB";

export const ProductContext = createContext();

export const ProductProvider = ({children}) => {

    const [productsArray, setProductsArray] = useState([])

    const getProductData = async () => {
        try {
            const {status, data: {products}} = await fakeFetch("https://example.com/api/products");
            if (status === 200) {
                setProductsArray(products);
            }
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => getProductData, [])
    return (<ProductContext.Provider value={{productsArray}}>
        {children}
    </ProductContext.Provider>)
}

export const useProducts = () => useContext(ProductContext);