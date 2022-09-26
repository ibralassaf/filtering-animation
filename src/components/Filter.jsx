import React, { useEffect } from "react";
import "../App.css";

export default function Filter({
  setActiveGenre,
  activeGenre,
  setFiltered,
  popular,
}) {
  useEffect(() => {
    if (activeGenre === 0) {
      setFiltered(popular);
      return;
    }

    const filtered = popular.filter((movie) =>
      movie.genre_ids.includes(activeGenre)
    );
    setFiltered(filtered);
  }, [activeGenre]);

  return (
    <div>
      <button
        className={activeGenre === 0 ? "active" : ""}
        onClick={() => {
          setActiveGenre(0);
        }}
      >
        All
      </button>
      <button
        className={activeGenre === 35 ? "active" : ""}
        onClick={() => {
          setActiveGenre(35);
        }}
      >
        Comedy
      </button>
      <button
        className={activeGenre === 18 ? "active" : ""}
        onClick={() => {
          setActiveGenre(18);
        }}
      >
        Action
      </button>
    </div>
  );
}
