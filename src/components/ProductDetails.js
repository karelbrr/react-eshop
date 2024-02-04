import "./ProductDetails.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetails = ({ fetch_url, cart, setCart }) => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`${fetch_url}${id}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(`Unable to get data: ${response.statusText}`);
      })
      .then((json) => setData(json));
  }, [fetch_url, id]);

  const addToCartButtonHandler = () => {
    cart.push(data[0]);
    setCart(cart);
    const newCart = [...cart];
    setCart(newCart);
    toast.success(name + " Byl přidán do košíku", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  const item = data.length > 0 ? data[0] : {};
  const { name = "", desc = "", price = "", image: img_src = "" } = item;

  return (
    <div className="product-details">
      <img className="product-details-image" src={img_src} alt="" />
      <div className="product-details-container">
        <h1 className="product-details-heading">{name}</h1>
        <p className="product-details-desc">{desc}</p>
        <p className="product-details-price">{price} ,-</p>
        <button
          className="product-details-button"
          onClick={addToCartButtonHandler}
        >
          Přidat do košíku
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ProductDetails;