import { Link } from "react-router-dom";
import { FaArrowDown } from "react-icons/fa";
import { LuArrowDown } from "react-icons/lu";
import "./Home.css";
import useFetch from "./useFetch";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const { data: articles } = useFetch("http://localhost:8000/news");
  const { data: products } = useFetch("http://localhost:8000/category_routes");

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="home">
      <div className="bg-container"></div>
      <Slider {...settings} className="slider-news">
        {articles.map((article) => (<Link key={article.id} className="slider-item-news">
          <div className="slider-item-news">
            <div className="slider-news-bg"></div>
            <h3 className="slider-news-heading">{article.title}</h3>
            <p className="slider-news-article">
              {article.text}
            </p>
          </div>
        </Link>))}      
      </Slider>
      <div className="content-container">
        <div className="content-item-2">
          <Slider {...settings} className="slider-content">
            {products.map((product) => (
              <div key={product.id} className="content-div">
                <Link className="content-link" to={product.path}>
                  <h2 className="content-heading">{product.quote}</h2>
                  <div className="bg-div"></div>
                </Link>
              </div>
            ))}
          </Slider>
        </div>
        <Link className="content-item-3" to={"/shop"}>
          <div className="content-item-shopnow">
            <LuArrowDown className="shopnow-arrow" />
            <hr className="shownow-line" />
            <h3 className="shopnow-text">Nakupovat teď</h3>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
