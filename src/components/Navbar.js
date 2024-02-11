import "./Navbar.css";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";

const Navbar = ({ cart, setSearch, search }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearchClick = () => {
    setSearch(searchValue);
  };

  return (
    <div className="navbar">
      <div className="left-side">
        <h1 className="main-heading">ReactShop</h1>
      </div>
      <div className="right-side">
        <div className="nav-links">
          <Link to="/" className="nav-link">
            domů
          </Link>
          <Link to="/shop" className="nav-link">
            kategorie
          </Link>
        </div>
        <input
          type="text"
          className="search-bar"
          placeholder="Vyhledat..."
          onChange={handleInputChange}
        />
        <Link className="search-icon" to="/search">
          {searchValue && <CiSearch onClick={handleSearchClick} />}
        </Link>

        <Link className="cart-link" href="" to="/cart">
          <IoCartOutline className="navbar-icon" />
          {cart.length > 0 && cart.length <= 1 && (
            <p style={{ paddingLeft: "8px" }} className="badge">
              {cart.length}
            </p>
          )}
          {cart.length > 1 && cart.length < 10 && (
            <p style={{ paddingLeft: "6px" }} className="badge">
              {cart.length}
            </p>
          )}
          {cart.length >= 10 && (
            <p style={{ paddingLeft: "4px" }} className="badge">
              {cart.length}
            </p>
          )}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
