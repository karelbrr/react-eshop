import "./ProductList.css";
import Product from "./Product";
import { FaArrowDown } from "react-icons/fa";
import useFetch from "./useFetch";

const ProductList = ({
  cname,
  fetch_url,
  bg_img,
  height,
  ptop,
  quote,
  quote_desc,
}) => {
  const { data } = useFetch(fetch_url);

  return (
    <div className="product-list">
      <div
        className="product-bg"
        style={{ backgroundImage: `url(${bg_img})`, height: height }}
      >
        <h2 className="quote" style={{ paddingTop: ptop }}>
          {quote}
        </h2>
        <p className="product-bg-desc">{quote_desc}</p>
        <p className="scroll">
          <a className="scroll" href="#category-name">
            <FaArrowDown />
          </a>
        </p>
      </div>
      <div className="black-space" style={{ height: "100px" }}></div>
      <h2 id="category-name">{cname}</h2>
      <div className="products-container">
        {data.map((item) => (
          <Product key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
