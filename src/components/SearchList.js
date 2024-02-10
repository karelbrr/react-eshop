import "./SearchList.css"

const SearchList = ({search}) => {
    return ( <div className="search-list">
        <h1>{search}</h1>
    </div> );
}
 
export default SearchList;