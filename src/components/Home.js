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
        <Link className="slider-item-news">
          <div className="slider-item-news">
            <div className="slider-news-bg"></div>
            <h3 className="slider-news-heading">Nadpis 1</h3>
            <p className="slider-news-article">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              a libero eu libero pretium egestas. Donec lacinia nisi eget tortor
              elementum ultrices. NullaNullaNullaNullaNullaNulla viverra nisl
              non ligula volutpat viverra. Cras eu rutrum diam, ut pulvinar
              orci. Fusce ultrices erat pellentesque feugiat pulvinar. Nulla sit
              amet odio arcu. Aenean id lacinia nibh. Praesent massa elit,
              pulvinar a lacus id, finibus
            </p>
          </div>
        </Link>
        <Link className="slider-item-news">
          <div className="slider-item-news">
            <div className="slider-news-bg"></div>
            <h3 className="slider-news-heading">Nadpis 2</h3>
            <p className="slider-news-article">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              a libero eu libero pretium egestas. Donec lacinia nisi eget tortor
              elementum ultrices. Nulla viverra nisl non ligula volutpat
              viverra. Cras eu rutrum diam, ut pulvinar orci. Fusce ultrices
              erat pellentesque feugiat pulvinarpulvinarpulvinarpulvinar. Nulla
              sit amet odio arcu. Aenean id lacinia nibh. Praesent massa elit,
              pulvinar a lacus id, finibu
            </p>
          </div>
        </Link>
        <Link className="slider-item-news">
          <div className="slider-item-news">
            <div className="slider-news-bg"></div>
            <h3 className="slider-news-heading">Nadpis 3</h3>
            <p className="slider-news-article">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              a libero eu libero pretium egestas. Donec lacinia nisi eget tortor
              elementum ultrices. Nulla viverra nisl non ligula volutpat
              viverra. Cras eu rutrum diam, ut pulvinar orci. Fusce ultrices
              erat pellentesque feugiatfeugiatfeugiat pulvinar. Nulla sit amet
              odio arcu. Aenean id lacinia nibh. Praesent massa elit, pulvinar a
              lacus id, finibus mattis lectus.
            </p>
          </div>
        </Link>
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
