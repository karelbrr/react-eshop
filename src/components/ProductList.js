import "./ProductList.css"
import Product from "./Product";
import { useState, useEffect } from "react";
import { FaArrowDown } from "react-icons/fa";


const ProductList = ({cname, fetch_url, bg_img, height, ptop}) => {
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
        <div className="product-bg" style={{backgroundImage: `url(${bg_img})`, height:height}}>
            <h2 className="quote" style={{paddingTop: ptop}}>Cokoliv si představíš, To MacBook dokáže</h2>
            <p className="product-bg-desc">Výkonný notebook v elegantním provedení. Lehký a tenký design spojený s vysokým výkonem a Retina displejem. Ideální společník pro ty, kteří oceňují eleganci a efektivitu.</p>
            <p className="scroll"><a className="scroll" href="#category-name"><FaArrowDown /></a></p>
        </div>
        <h2 id="category-name">{cname}</h2>
        <div className="products-container">
        {data.map(item => <Product key={item.id} product={item}/>)}
        </div>
    </div> );
}
 
export default ProductList;