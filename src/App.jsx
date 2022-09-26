import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import "./App.css";
import Filter from "./components/Filter";
import Movie from "./components/Movie";
function App() {
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);

  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchPopular = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_ACCESS}&language=en-US&page=1`
    );
    const movies = await data.json();
    console.log(movies);
    setPopular(movies.results);
    setFiltered(movies.results);
  };

  return (
    <div className="App">
      <Filter
        popular={popular}
        setFiltered={setFiltered}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
      />
      <motion.div layout className="popular-movies">
        <AnimatePresence>
          {filtered.map((movie) => {
            return <Movie key={movie.id} movie={movie} />;
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default App;
