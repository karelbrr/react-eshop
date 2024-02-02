import { Link } from "react-router-dom";
import "./Cart.css"
import { GoTrash } from "react-icons/go";

const Cart = ({cart, setCart, inCart, setInCart}) => {
    const deleteAllHandler = () => {
        setCart([])
        setInCart(false)
    }

    const deleteHandler = () => {
        console.log("test");
    }
    let sumPrice = cart.reduce((total, item) => total + item.price, 0);

    return ( <div className="cart">
        <h1 className="cart-heading">Košík</h1>
        {cart.map(item => <Link key={item.id} className="cart-item-link" to={item.link+item.id}><div className="cart-item">
            <div className="band-left">
                <h3 className="cart-item-name">{item.name}</h3>
            </div> 
            <div className="band-right">
                <p className="cart-item-price">{item.price} ,-</p>
                <button className="cart-item-delete" onClick={deleteHandler}><GoTrash/></button>
            </div>
        </div></Link>)}
        {!inCart && <h2 className="empty-cart-title">V košíku zatím nic není...</h2>}
       {inCart && <button className="cart-delete-all" onClick={deleteAllHandler}>Smazat vše</button>}
        
        <hr className="cart-line" />
        <div className="cart-summary">
            
            <p className="cart-summary-price">Celkem: {sumPrice},-</p>
            <a className="continue-link"href="#">Pokračovat</a>
        </div>
        
        
    </div> );
}
 
export default Cart;