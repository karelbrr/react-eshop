import { Link } from "react-router-dom";
import "./Cart.css";
import { GoTrash } from "react-icons/go";

const Cart = ({ cart, setCart, inCart, setInCart }) => {
  const deleteAllHandler = () => {
    setCart([]);
  };

  const deleteHandler = (itemId) => {
    const newCart = [...cart];
    const productIndex = newCart.findIndex((item) => item.id === itemId);
    newCart.splice(productIndex, 1);
    setCart(newCart);
  };

  let sumPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart">
      <h1 className="cart-heading">Košík</h1>
      {cart.map((item) => (
        <div className="cart-item" key={item.id}>
          <div className="band-left">
            <Link className="cart-item-link" to={item.link + item.id}>
              <h3 className="cart-item-name">{item.name}</h3>
            </Link>
          </div>
          <div className="band-right">
            <p className="cart-item-price">{item.price} ,-</p>
            <button
              className="cart-item-delete"
              onClick={() => deleteHandler(item.id)}
            >
              <GoTrash />
            </button>
          </div>
        </div>
      ))}
      {cart.length === 0 && (
        <h2 className="empty-cart-title">V košíku zatím nic není...</h2>
      )}
      {cart.length >= 1 && (
        <button className="cart-delete-all" onClick={deleteAllHandler}>
          Smazat vše
        </button>
      )}

      <hr className="cart-line" />
      <div className="cart-summary">
        <p className="cart-summary-price">
          Celkem: {sumPrice},- {cart.length}
        </p>
        <p className="continue-link">Pokračovat</p>
      </div>
    </div>
  );
};

export default Cart;
