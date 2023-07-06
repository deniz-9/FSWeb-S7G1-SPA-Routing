import React from 'react';
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
export default function FilmListesi(props) {
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <FilmDetayları key={movie.id} movie={movie} />
      ))}
    </div>
  );
  }

function FilmDetayları(props) {
  const history = useHistory();
  const { title, director, metascore, id } = props.movie;

  return (
    <div className="movie-card" onClick={() =>{
      history.push(`/filmler/${id}`)
    }}>
      <h2>{title}</h2>
      {/* <Link to={`/filmler/${id}`}>
      </Link> */}
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
  );
}
