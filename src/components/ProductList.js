import "./ProductList.css"
import Product from "./Product";

const ProductList = ({cname}) => {
    return ( <div className="product-list">
        <h2 className="category-name">{cname}</h2>
        <div className="products-container">
            <Product /> 
            <Product /> 
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
        </div>
    </div> );
}
 
export default ProductList;