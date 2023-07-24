import { useState, useEffect } from "react"; //gerenciar estados dos filmes//para ser feita a chamada da api assim que a página recarregar

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
    <div>{topMovies && topMovies.map((movie) => <p>{movie.title}</p>)}</div>
  );
};

export default Home;
