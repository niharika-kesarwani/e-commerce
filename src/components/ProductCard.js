import { NavLink } from "react-router-dom";
import "../styles/ProductCard.css"
import { useCart } from "../context/cart-context";
import { useWishlist } from "../context/wishlist-context";

export default function ProductCard ({id, name, description, price, quantity, category, brand, visited, about}) {

    const { addToCart } = useCart();
    const { addToWishlist } = useWishlist();

    return (
        <li key={id}>
            {visited && <p>Name: {name}</p>}
            {!visited && <h3>{name}</h3>}
            <p>{visited && "Description: "}{description}</p>
            {visited && <p>Quantity: {quantity}</p>}
            {visited && <p>Category: {category}</p>}
            {visited && <p>Brand: {brand}</p>}
            {!visited && <p>Price: {price}</p>}
            {!visited && <div><NavLink to={`/about/${id}`}>Visit Item</NavLink></div>}
            {(!visited || about) && <button onClick={() => addToCart(id)}>Add To Cart</button>}
            {(!visited || about) && <button onClick={() => addToWishlist(id)}>Add To Wishlist</button>}
        </li>
    )
}