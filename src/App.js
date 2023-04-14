import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header.js"
import { ProductList } from "./pages/ProductList.js";
import { Cart } from "./pages/Cart.js";
import { Wishlist } from "./pages/Wishlist";
import { About } from "./pages/About.js"
import { Error } from "./pages/Error";

export default function App() {

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={< ProductList />} />
        <Route path="/cart" element={< Cart />} />
        <Route path="/wishlist" element={< Wishlist />} />
        <Route path="/about/:productId" element={< About />}/>
        <Route path="/*" element={< Error />} />
      </Routes>
    </div>
  );
}