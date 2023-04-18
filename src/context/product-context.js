import { createContext, useContext, useEffect, useState } from "react";
import { fakeFetch } from "../data/productsDB";

export const ProductContext = createContext();

export const ProductProvider = ({children}) => {

    const [productsArray, setProductsArray] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    const getProductData = async () => {
        try {
            setIsLoading(true);
            const {status, data: {products}} = await fakeFetch("https://example.com/api/products");
            setIsLoading(false);
            if (status === 200) {
                setProductsArray(products);
            }
        } catch (err) {
            setIsLoading(false);
            console.error(err)
        }
    }

    useEffect(() => getProductData, [])
    return (<ProductContext.Provider value={{productsArray, isLoading}}>
        {children}
    </ProductContext.Provider>)
}

export const useProducts = () => useContext(ProductContext);