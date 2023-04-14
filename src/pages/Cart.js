import ProductCard from "../components/ProductCard";
import { useCart } from "../context/cart-context";
import "../styles/Cart.css"

export function Cart () {

    const { cartArray, removeFromCart } = useCart(); 
    
    return (
        <div>
            <h2>My Cart</h2>
            <h2>Items: {cartArray.length}</h2>
            <ul>
            {
                cartArray && cartArray.map(product => 
                    <div>
                        <ProductCard key={product.id} {...product} visited />
                        <button onClick={() => removeFromCart(product.id)}>Remove from Cart</button>
                        <hr />
                    </div>
                )
            }
            </ul>
        </div>
    )
}