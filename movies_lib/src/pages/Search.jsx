import { useEffect, useState } from "react"; //gerenciar estados dos filmes//para ser feita a chamada da api assim que a página recarregar
import { useSearchParams } from "react-router-dom"; //nos permite pegar a query da url e utilizar como for preciso
import MovieCard from "../components/MovieCard"; //componente que exibe filme individualmente
import "./MoviesGrid.css";

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

const Search = () => {
  const [searchParams] = useSearchParams();

  const [movies, setMovies] = useState([]);
  const query = searchParams.get("q"); //funciona com qualquer parâmetro da busca

  const getSearchedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovies(data.results); //dados dos filmes
  };

  useEffect(() => {
    const searchWithQueryURL = `${searchURL}?query=${query}&${apiKey}`;

    getSearchedMovies(searchWithQueryURL);
  }, [query]);

  return (
    <div className="container">
      <h2 className="title">
        Resultados para: <span className="query-text">{query}</span>
      </h2>
      <div className="movies-container">
        {movies.length > 0 &&
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
        {/*key é obrigatória, nela, fica o elemento identificador do dado*/}
        {/*se topMovies tiver elementos, faz um .map, nomeando cada item de movie*/}
      </div>
    </div>
  );
};

export default Search;
