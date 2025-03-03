import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {
  const [ directors, setDirectors ] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/directors")
      .then(resp => {
        if (resp.ok){
          return resp.json()
        }
        else{
          throw new Error("Failed to fetch Directors")
        }
      })
      .then(data => setDirectors(data))
      .catch(err => {throw err})
  }, []);

  if (!directors) return <p>Loading...</p>
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Directors Page</h1>
        {directors.map((director) => (
          <article key={director.id}>
            <h2>{director.name}</h2>
            <ul>
              {director.movies.map((movie, index) => (
                <li key={index}>{movie}</li>
              ))}
            </ul>
          </article>
        ))}
      </main>
    </>
  );

};

export default Directors;
