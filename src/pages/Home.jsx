import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";

function Home() {
  return (
    <>
      <header>
        { NavBar() }
      </header>
      <main>
        {<h1>Home Page</h1>}
        <MovieCard />
      </main>
    </>
  );
};

export default Home;
