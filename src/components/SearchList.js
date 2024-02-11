import "./SearchList.css";

const SearchList = ({ search }) => {
  return (
    <div className="search-list">
      <div className="bg-container"></div>
      <p className="search-text">Hledaný výraz - {search}</p>
    </div>
  );
};

export default SearchList;
