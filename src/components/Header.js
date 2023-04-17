import { NavLink } from "react-router-dom";

const navLinkStyle = {
    display: "block",
    textAlign: "center"
};

export function Header() {
    return (
    <div>
        <h1><NavLink to="/">Product Listing Page</NavLink></h1>
        <nav>
            <NavLink style={navLinkStyle} to="/cart" >My Cart</NavLink>
            <NavLink style={navLinkStyle} to="/wishlist">My Wishlist</NavLink>
            <NavLink style={navLinkStyle} to="/*"></NavLink>
        </nav>
    </div>
    )
}