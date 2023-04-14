import ProductCard from "../components/ProductCard";
import { useCart } from "../context/cart-context";
import "../styles/Cart.css"

export function Cart () {

    const {cartArray} = useCart(); 
    
    return (
        <div>
            <h2>My Cart</h2>
            <h2>Items: {cartArray.length}</h2>
            <ul>
            {
                cartArray && cartArray.map(product => 
                    <div>
                        <ProductCard key={product.id} {...product} visited />
                        <hr />
                    </div>
                )
            }
            </ul>
        </div>
    )
}