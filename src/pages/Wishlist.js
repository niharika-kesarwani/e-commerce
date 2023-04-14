import ProductCard from "../components/ProductCard";
import { useProducts } from "../context/product-context"

export function Wishlist () {

    const {productsArray} = useProducts();

    return (
        <div>
            <h2>My Wishlist</h2>
            <ProductCard {...productsArray[1]} visited />
        </div>
    )
}