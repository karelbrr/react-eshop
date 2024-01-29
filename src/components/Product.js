import { Link } from "react-router-dom"
import "./Product.css"

const Product = ({product}) => {
    return ( 
        <Link className="product-link"><div className="product">
            <img className="product-img" src={product.image} alt="" />
            <h2 className="product-name">{product.name}</h2>
            <p className="product-desc">{product.desc}</p>
            <p className="product-price">{product.price} ,-</p>
        </div></Link>
     );
}
 
export default Product;