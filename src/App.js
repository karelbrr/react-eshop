import { CiShoppingCart } from "react-icons/ci";
import Navbar from "./components/Navbar";
import "./App.css"
import Home from "./components/Home";
import { BrowserRouter as Router,  Routes, Route } from "react-router-dom";
import Shop from "./components/Shop";
import Add from "./components/Add";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import { useState } from "react";

const App = () => {
  const[cart, setCart] = useState([])


  return ( 
    
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/add" element={<Add/>}/>
          <Route path="/cart" element={<Cart  cart={cart}/>}/>
          <Route path="/shop/iphone" element={<ProductList cname={"Apple IPhone"} fetch_url={"http://localhost:8000/products_iphone"}/>}/>
          <Route path="/shop/macbook" element={<ProductList cname={"Apple MacBook"} fetch_url={"http://localhost:8000/products_macbook"}/>}/>
          <Route path="/shop/imac" element={<ProductList cname={"Apple IMac"} fetch_url={"http://localhost:8000/products_imac"}/>}/>
          <Route path="/shop/watch" element={<ProductList cname={"Apple Watch"} fetch_url={"http://localhost:8000/products_watch"}/>}/>
          <Route path="/shop/details-iphone/:id" element={<ProductDetails cart={cart} setCart={setCart} fetch_url={"http://localhost:8000/products_iphone/?id="}/>}/>
          <Route path="/shop/details-macbook/:id" element={<ProductDetails cart={cart} setCart={setCart} fetch_url={"http://localhost:8000/products_macbook/?id="}/>}/>
          <Route path="/shop/details-imac/:id" element={<ProductDetails cart={cart} setCart={setCart} fetch_url={"http://localhost:8000/products_imac/?id="}/>}/>
          <Route path="/shop/details-watch/:id" element={<ProductDetails cart={cart} setCart={setCart} fetch_url={"http://localhost:8000/products_watch/?id="}/>}/>
        </Routes>
      </div>
  </Router>
  );
}
 
export default App;