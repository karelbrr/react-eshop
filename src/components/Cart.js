import { Link } from "react-router-dom";
import "./Cart.css"
import { GoTrash } from "react-icons/go";

const Cart = ({cart}) => {
    const deleteHandler = () => {
        console.log("test");
    }

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
        

        
    </div> );
}
 
export default Cart;