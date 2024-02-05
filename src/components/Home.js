import { Link } from "react-router-dom";
import "./Home.css";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data: articles,
  } = useFetch("http://localhost:8000/news");

  return (
    <div className="home">
      <div className="bg-container"></div>
      <div className="content-container">
        <Link className="content-item-1"><div className="content-item-1"></div></Link>
        <Link className="content-item-2"><div className="content-item-2"></div></Link>
        <Link className="content-item-3"><div className="content-item-3"></div></Link>
      </div>
      <h2 className="news-heading">Novinky</h2>
      {articles.map((article) => (
        <div key={article.id} className="news-item">
          <h3 className="news-item-title">{article.title}</h3>
          <p className="news-item-text">{article.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
