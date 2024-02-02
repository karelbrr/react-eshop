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
  const[cart, setCart] = useState([{
    "id": 1,
    "image_width": "30%",
    "link": "/shop/details-iphone/",
    "image": "http://localhost:8000/iphone-img.png",
    "name": "Apple iPhone 15",
    "desc": "Mobilní telefon - 6,1 Super Retina XDR OLED 2556 × 1179, vnitřní paměť 256 GB, single SIM + eSIM, procesor Apple A16 Bionic, fotoaparát: 48Mpx (f/1,6) hlavní + 12Mpx širokoúhlý, přední kamera 12Mpx, GPS, NFC, LTE, 5G, USB-C, voděodolný dle IP68, rychlé nabíjení 20W, bezdrátové nabíjení 15W, model 2023, iOS",
    "price": 24999
  },{
    "id": 3,
    "image_width": "30%",
    "link": "/shop/details-iphone/",
    "image": "http://localhost:8000/iphone-img.png",
    "name": "Apple iPhone 15 Pro Max",
    "desc": "Mobilní telefon - 6,7 Super Retina XDR OLED 2796 × 1290 (120Hz), vnitřní paměť 1024 GB, single SIM + eSIM, procesor Apple A17 Pro, fotoaparát: 48Mpx (f/1,78) hlavní + 12Mpx širokoúhlý + 12Mpx teleobjektiv, přední kamera 12Mpx, GPS, NFC, LTE, 5G, USB-C, voděodolný dle IP68, rychlé nabíjení, bezdrátové nabíjení 15W, model 2023, iOS",
    "price": 46999
  },])


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
          <Route path="/shop/details-iphone/:id" element={<ProductDetails fetch_url={"http://localhost:8000/products_iphone/?id="}/>}/>
          <Route path="/shop/details-macbook/:id" element={<ProductDetails fetch_url={"http://localhost:8000/products_macbook/?id="}/>}/>
          <Route path="/shop/details-imac/:id" element={<ProductDetails fetch_url={"http://localhost:8000/products_imac/?id="}/>}/>
          <Route path="/shop/details-watch/:id" element={<ProductDetails fetch_url={"http://localhost:8000/products_watch/?id="}/>}/>
        </Routes>
      </div>
  </Router>
  );
}
 
export default App;