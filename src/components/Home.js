import "./Home.css"
import useFetch from "./useFetch";



const Home = () => {
    const {data: articles, isPending, error} = useFetch("http://localhost:8000/news")

    return ( <div className="home">
        <div className="bg-container"></div>
        <h2 className="news-heading">Novinky</h2>
        {articles.map(article => <div key={article.id} className="news-item">
            <h3 className="news-item-title">{article.title}</h3>
            <p className="news-item-text">{article.text}</p>
        </div>)}
        
    </div> );
}
 
export default Home;