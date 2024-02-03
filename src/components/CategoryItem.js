import { Link } from "react-router-dom";
import "./CategoryItem.css";

const CategoryItem = ({ category }) => {
  return (
    <Link to={category.linkto} className="category-item-link">
      <div className="category-item">
        <img
          className="category-img"
          src={category.image}
          alt={category.name}
        />
        <div>
          <h3 className="category-heading">{category.name}</h3>
          <p className="category-desc">{category.desc}</p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryItem;
