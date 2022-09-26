import { motion } from "framer-motion";
import React from "react";
import "../App.css";
export default function Movie({ movie }) {
  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
    >
      <h2 className="">{movie.title}</h2>
      <img
        src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path}
        alt=""
      />
    </motion.div>
  );
}
