import { Link } from "react-router-dom"
import "./CategoryItem.css"

const CategoryItem = (props) => {
    return ( <Link><div className="category-item">
        <h3 className="category-heading">{props.catName}</h3>
        <p className="category-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget fermentum dui. Quisque sed volutpat diam. Sed rhoncus venenatis euismod. Quisque convallis ullamcorper mauris, sed rutrum justo varius ut.</p>
    </div></Link> );
}
 
export default CategoryItem;