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

/**
 * Celkově je to hezké, dobrá práce!!! 
 * Doporučil bych ti ještě zvážít eslint a prettier, v kódu máš proměnné, které nejsou použity a někde máš špatné odsazení. Není to žádná velká chyba, ale je dobré držet kod "standardizovaný" ať se v něm každý dokáže hned zorintovat a v tom ti eslint a prettier může pomoct.
 * Taky "databázi" a data máš v JSONu, na testování je to super, ale pokud bys tu aplikaci chtěl mít funkční v produkční kvalitě, tak by bylo dobré abys využil nějakou reálnou databázi. Můžeš se podívat na Supabase (https://supabase.com/), můžeš si tam relativně jednoduše udělat to co máš v data/db.json, ale budeš to mít reálně uložené v databázi a poskytne ti to další funkce jako přihlašování uživatelů, apod. To však ber spíš jako nápad do budoucna :)  
 */
const App = () => {
  /**
  * Myslím si, že tyto dva setState (setCart, setInCart) nepotřebuješ a stačí ti jen jeden - setCart, který když bude lenght 0 (cart.length === 0) tak poznáš zda je něco v košíku nebo ne a nepotřebuješ nastavovat další stav. Všeobecně je lepší mít co nejméně "stavů" jak je možné, protože to jsou věci kde se stávají chyby nejvíce a čím méně jich máš, tím je menší pravděpodovnost chyby.
  */
  const[cart, setCart] = useState([])
  const[inCart, setInCart] = useState(false)
  const {data: category_routes_data, isPending: category_routes_isPending, error: category_routes_error} =useFetch("http://localhost:8000/category_routes")
  const {data: product_routes_data, isPending: product_routes_isPending, error: product_routes_error} =useFetch("http://localhost:8000/product_routes")

  return ( 
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/add" element={<Add/>}/>
          <Route path="/cart" element={<Cart  cart={cart} setCart={setCart} inCart={inCart} setInCart={setInCart}/>}/>
          {category_routes_data.map(route => <Route key={route.id} path={route.path} element={<ProductList cname={route.cname} fetch_url={route.fetch_url} bg_img={route.bg_img} height={route.height} ptop={route.ptop} quote={route.quote} quote_desc={route.quote_desc}/>}/>)}
          {product_routes_data.map(route => <Route key={route.id} path={route.path} element={<ProductDetails cart={cart} setCart={setCart} setInCart={setInCart} fetch_url={route.fetch_url}/>}/>)}
        </Routes>
      </div>
  </Router>
  )
}
 
export default App;