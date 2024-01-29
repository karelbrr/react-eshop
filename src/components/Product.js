import { Link } from "react-router-dom"
import "./Product.css"

const Product = () => {
    return ( 
        <Link className="product-link"><div className="product">
            <img className="product-img" src="" alt="" />
            <h2 className="product-name">Apple IPhone 12</h2>
            <p className="product-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            <span className="product-price">26999,- </span>
        </div></Link>
     );
}
 
export default Product;