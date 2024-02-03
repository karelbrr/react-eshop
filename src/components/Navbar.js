import "./Navbar.css";
import { IoCartOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";



const Navbar = ({ cart }) => {


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
        <Link href="" to="/cart">
          <IoCartOutline className="navbar-icon" />
        </Link>
        {cart.length >= 1 && cart.length < 10 && <span className="badge">{cart.length}</span>}
        {cart.length >= 10 && <span style={{paddingLeft: "3px"}} className="badge">{cart.length}</span>}
      </div>
    </div>
  );
};

export default Navbar;
