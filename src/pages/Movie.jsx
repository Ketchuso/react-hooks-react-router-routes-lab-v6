import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";

function Movie() {
  const { id } = useParams();
  const [ movie, setMovie ] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${id}`)
      .then(resp => {
        if (resp.ok){
          return resp.json()
        }
        else{
          throw new Error("Failed to fetch Movie")
        }
      })
      .then(data => setMovie(data))
      .catch(err => {throw err})
  }, [id])

  if (!movie) return <p>Loading...</p>
  return (
    <>
      <header>
        {NavBar()}
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>Length: {movie.time}</p>
        {movie.genres.map((genre, index) =>{
          return <span key={index}>{genre}</span>
        })
        }
      </main>
    </>
  );
};

export default Movie;
