import "./ProductDetails.css"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDetails = ({fetch_url, cart, setCart, setInCart}) => {
    const [data, setData] = useState([])
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState()
    const { id } = useParams()


    useEffect(() => {
        fetch(fetch_url+id)
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                throw new Error(`Unable to get data: ${response.statusText}`)
            })
            .then(json => setData(json))
            .catch((err) => setError(err.message))
            .finally(() => setIsPending(false))
            
    }, [])

    const addToCartButtonHandler = () => {
        cart.push(data[0])
        setCart(cart)
        
        setInCart(true)
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
    }

    const name = data.length > 0 ? data[0].name : "";
    const desc = data.length > 0 ? data[0].desc : "";
    const price = data.length > 0 ? data[0].price : "";
    const img_src = data.length > 0 ? data[0].image : "";
    
    
    

    return ( <div className="product-details">
        <img className="product-details-image" src={img_src} alt="" />
        <div className="product-details-container">
            <h1 className="product-details-heading">{name}</h1>
            <p className="product-details-desc">{desc}</p>
            <p className="product-details-price">{price} ,-</p>
            <button className="product-details-button" onClick={addToCartButtonHandler} >Přidat do košíku</button>
        </div>
        <ToastContainer/>
    </div> );
}
 
export default ProductDetails;