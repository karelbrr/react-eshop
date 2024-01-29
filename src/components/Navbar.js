import "./Navbar.css"
import { IoCartOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";





const Navbar = () => {
    return (<div className="navbar">
        <div className="left-side">
            <h1 className="main-heading">ReactShop</h1>
        </div>  
        <div className="right-side">
            <div className="nav-links">
                    <Link to="/" className="nav-link">domů</Link>
                    <Link to="/shop" className="nav-link">obchod</Link>
                    
                </div>
            <Link href=""><CiSearch className="navbar-icon"/></Link>  
            <Link href=""><IoCartOutline className="navbar-icon"/></Link>                   
        </div> 
    </div>);
}
 
export default Navbar;