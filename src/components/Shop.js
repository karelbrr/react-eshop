import "./Shop.css";
import CategoryItem from "./CategoryItem";
import useFetch from "./useFetch";

const Shop = () => {
  const { data, error } = useFetch(
    "http://localhost:8000/categories"
  );

  return (
    <div className="shop">
      <div className="bg-container"></div>
      <h2 id="categories-heading">Kategorie</h2>
      <div className="categories-container">
        {data.map((item) => (
          <CategoryItem key={item.id} category={item} />
        ))}
      </div>

      {error && (
        <div className="error-container">
          <h3 className="error-name">Něco se nepovedlo</h3>
          <p className="error-text">{error}</p>
        </div>
      )}
    </div>
  );
};

export default Shop;
