import { useParams } from "react-router";
import { useProducts } from "../context/product-context";
import ProductCard from "../components/ProductCard";
import { Error } from "./Error";
import "../styles/About.css"

export function About () {
    const {productId} = useParams();
    const {productsArray} = useProducts();

    const visitedProduct = productsArray.find(({id}) => id === Number(productId));

    return (
        <div>
            {visitedProduct === undefined ? <Error/> : <div>
                <h2>About</h2>
                <ProductCard {...visitedProduct} visited about/>
            </div>}
        </div>
    )
}