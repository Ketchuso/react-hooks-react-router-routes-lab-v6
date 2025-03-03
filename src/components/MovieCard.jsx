import {Link} from 'react-router-dom';
import { useState, useEffect } from 'react';

function MovieCard() {
  const [ movies, setMovies ] = useState([]) 

  useEffect(() => {
    fetch("http://localhost:4000/movies")
      .then(resp => {
        if (resp.ok){
          return resp.json()
        }
        else{
          throw new Error("Failed to fetch Movies")
        }
      })
      .then(data => setMovies(data))
      .catch(err => {throw err})
  }, []);
  

  return (
    <article>
      {movies.map((movie) => (
        <div key={movie.id}> 
          <h2>{movie.title}</h2>
          <Link to={`/movie/${movie.id}`}>View Details</Link>
        </div>
      ))}
    </article>
  );
}

export default MovieCard;