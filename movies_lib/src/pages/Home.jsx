import { useState, useEffect } from "react"; //gerenciar estados dos filmes//para ser feita a chamada da api assim que a página recarregar
import MovieCard from "../components/MovieCard";

//chave e url da api
const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setTopMovies(data.results); //dados dos filmes
  };

  useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;
    getTopRatedMovies(topRatedUrl);
  }, []);
  return (
    <div className="container">
      <h2 className="title">Melhores filmes:</h2>
      <div className="movies-container">
        {topMovies.length === 0 && <p>Carregando...</p>}
        {topMovies.length > 0 &&
          topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}{/*key é obrigatória, nela, fica o elemento identificador do dado*/}
        {/*se topMovies tiver elementos, faz um .map, nomeando cada item de movie*/}
      </div>
    </div>
  );
};

export default Home;