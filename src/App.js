import { CiShoppingCart } from "react-icons/ci";
import Navbar from "./components/Navbar";
import "./App.css"
import Home from "./components/Home";
import { BrowserRouter as Router,  Routes, Route } from "react-router-dom";
import Shop from "./components/Shop";
import Add from "./components/Add";
import ProductList from "./components/ProductList";

const App = () => {
  return (  
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/add" element={<Add/>}/>
          <Route path="/shop/iphone" element={<ProductList cname={"Apple IPhone"} fetch_url={"http://localhost:8000/products_iphone"}/>}/>
          <Route path="/shop/macbook" element={<ProductList cname={"Apple MacBook"} fetch_url={"http://localhost:8000/products_macbook"}/>}/>
          <Route path="/shop/imac" element={<ProductList cname={"Apple IMac"} fetch_url={"http://localhost:8000/products_imac"}/>}/>
          <Route path="/shop/watch" element={<ProductList cname={"Apple Watch"} fetch_url={"http://localhost:8000/products_watch"}/>}/>
        </Routes>
      </div>
  </Router>
  );
}
 
export default App;