import "./Shop.css"
import CategoryItem from "./CategoryItem";


const Shop = () => {
    return ( <div className="shop">
        <h2 className="categories-heading">Kategorie</h2>
        <div className="categories-container">
            <CategoryItem catName={"Apple IPhone"}/>           
            <CategoryItem catName={"Apple MacBook"}/>           
            <CategoryItem catName={"Apple IMac"}/>           
            <CategoryItem catName={"Apple Watch"}/>           
        </div>
    </div> );
}
 
export default Shop;