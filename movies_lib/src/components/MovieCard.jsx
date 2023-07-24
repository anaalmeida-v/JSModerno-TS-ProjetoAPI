import { Link } from "react-router-dom"; //botão que linka p filme individual

import { FaStar } from "react-icons/fa"; //icon de avaliação

const imageUrl = import.meta.env.VITE_IMG; //resgatando url da imagem

const MovieCard = ({ movie, showLink = true }) => {
  //propriedade necessária para resgatar filme//mostrar link=true
  return (
    <div className="movie-card">
      <img src={imageUrl + movie.poster_path} alt={movie.title} />{/*poster do filme*/}
      <h2>{movie.title}</h2>
      <p><FaStar /> {movie.vote_average}</p>{/*avaliação do filme */}
      {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}{/*ver detalhes do filme*/}
    </div>
  );
};

export default MovieCard;