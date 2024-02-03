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
import { useEffect, useState } from "react";
import useFetch from "./components/useFetch";

const App = () => {
  const[cart, setCart] = useState([])
  const[inCart, setInCart] = useState(false)


  const {data, isPending, error} =useFetch("http://localhost:8000/category_routes")

   
  

  return ( 
    
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/add" element={<Add/>}/>
          <Route path="/cart" element={<Cart  cart={cart} setCart={setCart} inCart={inCart} setInCart={setInCart}/>}/>

          {data.map(route => <Route key={route.id} path={route.path} element={<ProductList cname={route.cname} fetch_url={route.fetch_url} bg_img={route.bg_img} height={route.height} ptop={route.ptop}/>}/>)}
          
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