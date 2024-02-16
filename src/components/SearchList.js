import "./SearchList.css";
import Product from "./Product";
import useFetch from "./useFetch";
import { useEffect, useState } from "react";

const SearchList = ({ search }) => {
  const { data: iphoneData } = useFetch(
    "http://localhost:8000/products_iphone"
  );
  const { data: macbookData } = useFetch(
    "http://localhost:8000/products_macbook"
  );

  const { data: imacData } = useFetch("http://localhost:8000/products_imac");

  const { data: watchData } = useFetch("http://localhost:8000/products_watch");

  const allProducts = [
    ...iphoneData,
    ...macbookData,
    ...imacData,
    ...watchData,
  ];
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (search !== undefined && search !== null) {
      const filtered = allProducts.filter((item) =>
        item.name
          .toLowerCase()
          .replace(/\s/g, "")
          .replace(".", "")
          .includes(search.toLowerCase().replace(/\s/g, "").replace(".", ""))
      );

      setFilteredProducts((prevFilteredProducts) => {
        if (JSON.stringify(prevFilteredProducts) !== JSON.stringify(filtered)) {
          return filtered;
        }
        return prevFilteredProducts;
      });
    }
  }, [search, allProducts]);

  return (
    <div className="search-list">
      <div className="bg-container"></div>
      <div className="search-list-header">
        <p className="search-text">Hledaný výraz - {search}</p>
        <hr className="under-search-text-line" />
      </div>
      <div className="search-list-container">
        {filteredProducts.length === 0 && (
          <div className="search-error">
            <h3 className="search-error-text">Nic se nenašlo...</h3>
          </div>
        )}

        {filteredProducts.map((item) => (
          <Product key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default SearchList;
