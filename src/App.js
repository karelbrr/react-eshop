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
  const[inCart, setInCart] = useState(false)

  return ( 
    
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/add" element={<Add/>}/>
          <Route path="/cart" element={<Cart  cart={cart} setCart={setCart} inCart={inCart} setInCart={setInCart}/>}/>
          <Route path="/shop/iphone" element={<ProductList cname={"Dostupné iPhony"} fetch_url={"http://localhost:8000/products_iphone"} bg_img={"http://localhost:8000/iphone-bg.png"}/>}/>
          <Route path="/shop/macbook" element={<ProductList cname={"Dostupné Macbooky"} fetch_url={"http://localhost:8000/products_macbook"} bg_img={"http://localhost:8000/macbook-bg.png"}/>}/>
          <Route path="/shop/imac" element={<ProductList cname={"Apple IMac"} fetch_url={"http://localhost:8000/products_imac"}/>}/>
          <Route path="/shop/watch" element={<ProductList cname={"Apple Watch"} fetch_url={"http://localhost:8000/products_watch"} bg_img={"http://localhost:8000/watch-bg.png"}/>}/>
          <Route path="/shop/details-iphone/:id" element={<ProductDetails cart={cart} setCart={setCart} setInCart={setInCart} fetch_url={"http://localhost:8000/products_iphone/?id="}/>}/>
          <Route path="/shop/details-macbook/:id" element={<ProductDetails cart={cart} setCart={setCart} setInCart={setInCart} fetch_url={"http://localhost:8000/products_macbook/?id="}/>}/>
          <Route path="/shop/details-imac/:id" element={<ProductDetails cart={cart} setCart={setCart} setInCart={setInCart} fetch_url={"http://localhost:8000/products_imac/?id="}/>}/>
          <Route path="/shop/details-watch/:id" element={<ProductDetails cart={cart} setCart={setCart} setInCart={setInCart} fetch_url={"http://localhost:8000/products_watch/?id="}/>}/>
        </Routes>
      </div>
  </Router>
  );
}
 
export default App;