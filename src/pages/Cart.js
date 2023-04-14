import ProductCard from "../components/ProductCard";
import { useProducts } from "../context/product-context"

export function Cart () {

    const {productsArray} = useProducts();
    
    return (
        <div>
            <h2>My Cart</h2>
            <ProductCard {...productsArray[0]} visited />
        </div>
    )
}