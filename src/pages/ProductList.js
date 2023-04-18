import '../styles/ProductList.css'
import { useProducts } from "../context/product-context";
import ProductCard from "../components/ProductCard";

export function ProductList () {
    const {productsArray, isLoading} = useProducts();
    
    if (isLoading) {
        return <h1>Loading...</h1>
    }
    if (productsArray.length === 0) {
        return <h1>No Data Available...</h1>
    }
    
    return (
        <div>
            <ul>
            {
                productsArray.map(product =>
                    <ProductCard key={product.id} {...product}/>
                )
            }
            </ul>
        </div>
    )
}