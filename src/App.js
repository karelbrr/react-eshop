import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./components/Shop";
import Add from "./components/Add";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import { useEffect, useState } from "react";
import useFetch from "./components/useFetch";
import SearchList from "./components/SearchList";

const App = () => {
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState();
  const { data: category_routes_data } = useFetch(
    "http://localhost:8000/category_routes"
  );
  const { data: product_routes_data } = useFetch(
    "http://localhost:8000/product_routes"
  );


  return (
    <Router>
      <div className="app">
        <Navbar cart={cart} setSearch={setSearch} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/add" element={<Add />} />
          <Route
            path="/search"
            element={<SearchList search={search} />}
          ></Route>
          <Route
            path="/cart"
            element={<Cart cart={cart} setCart={setCart} />}
          />
          {category_routes_data.map((route) => (
            <Route
              key={route.id}
              path={route.path}
              element={
                <ProductList
                  cname={route.cname}
                  fetch_url={route.fetch_url}
                  bg_img={route.bg_img}
                  height={route.height}
                  ptop={route.ptop}
                  quote={route.quote}
                  quote_desc={route.quote_desc}
                />
              }
            />
          ))}
          {product_routes_data.map((route) => (
            <Route
              key={route.id}
              path={route.path}
              element={
                <ProductDetails
                  cart={cart}
                  setCart={setCart}
                  fetch_url={route.fetch_url}
                />
              }
            />
          ))}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
