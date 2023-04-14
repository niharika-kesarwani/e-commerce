import { NavLink } from "react-router-dom";
import "../styles/ProductCard.css"

export default function ProductCard ({id, name, description, price, quantity, category, brand, visited}) {
    return (
        <li key={id}>
            {visited && <p>Name: {name}</p>}
            {!visited && <h3>{name}</h3>}
            <p>{visited && "Description: "}{description}</p>
            {visited && <p>Quantity: {quantity}</p>}
            {visited && <p>Category: {category}</p>}
            {visited && <p>Brand: {brand}</p>}
            {!visited && <p>Price: {price}</p>}
            {!visited && <NavLink to={`/about/${id}`}>Visit Item</NavLink>}
        </li>
    )
}