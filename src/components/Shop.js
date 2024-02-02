import "./Shop.css"
import CategoryItem from "./CategoryItem";
import { useState, useEffect } from "react";


const Shop = () => {

    const [data, setData] = useState([])
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState()

    useEffect(() => {
            fetch('http://localhost:8000/categories')
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

    return (<div className="shop">
        <h2 className="categories-heading">Kategorie</h2>
        <div className="categories-container">
            {data.map(item => <CategoryItem key={item.id} category={item}/>)}

        </div>

        {error && <div className="error-container">
            <h3 className="error-name">Něco se nepovedlo</h3>
            <p className="error-text">{error}</p>
            </div>}
    </div>);
}

export default Shop;