import { Link } from "react-router-dom";
import "./Home.css";
import useFetch from "./useFetch";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home = () => {
  const {
    data: articles,
  } = useFetch("http://localhost:8000/news");

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
      <Slider {...settings} className="slider">
          <Link className="slider-item-1"><div className="slider-item-1"><h3 className="slider-text-heading">Nadpis 1</h3></div></Link>
          <Link className="slider-item-1"><div className="slider-item-1"><h3 className="slider-text-heading">Nadpis 2</h3></div></Link>
          <Link className="slider-item-1"><div className="slider-item-1"><h3 className="slider-text-heading">Nadpis 3</h3></div></Link>

        </Slider>
      <div className="content-container">
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
