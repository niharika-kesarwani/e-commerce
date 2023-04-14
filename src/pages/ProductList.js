import '../styles/ProductList.css'
import { useProducts } from "../context/product-context";
import ProductCard from "../components/ProductCard";

export function ProductList () {
    const {productsArray} = useProducts();
    
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