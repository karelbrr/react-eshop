import "./Navbar.css"
import { IoCartOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";





const Navbar = () => {
    return (<div className="navbar">
        <div className="left-side">
            <h1 className="main-heading">ReactShop</h1>
        </div>  
        <div className="right-side">
            <div className="nav-links">
                    <a href="#" className="nav-link">domů</a>
                    <a href="#" className="nav-link">obchod</a>
                </div>
            <a href=""><CiSearch className="navbar-icon"/></a>  
            <a href=""><IoCartOutline className="navbar-icon"/></a>                   
        </div> 
    </div>);
}
 
export default Navbar;