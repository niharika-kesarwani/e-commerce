import ProductCard from "../components/ProductCard";
import { useWishlist } from "../context/wishlist-context";

export function Wishlist () {

    const { wishlistArray, removeFromWishlist } = useWishlist();

    return (
        <div>
            <h2>My Wishlist</h2>
            <h2>Items: {wishlistArray.length}</h2>
            <ul>
            {
                wishlistArray && wishlistArray.map(product => 
                    <div>
                        <ProductCard {...product} visited />
                        <button onClick={() => removeFromWishlist(product.id)}>Remove from Wishlist</button>
                        <hr />
                    </div>
                )
            }
            </ul>
        </div>
    )
}