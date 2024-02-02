import "./ProductList.css"
import Product from "./Product";
import { useState, useEffect } from "react";

const ProductList = ({cname, fetch_url}) => {
    const [data, setData] = useState([])
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState()

    useEffect(() => {
        fetch(fetch_url)
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

    return ( <div className="product-list">
        <h2 className="category-name">{cname}</h2>
        <div className="products-container">
        {data.map(item => <Product key={item.id} product={item}/>)}
        </div>
    </div> );
}
 
export default ProductList;