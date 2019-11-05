import React from "react";
import "./reset.css";
import "./App.css";
import Navbar from "./navbar";
import Title from "./title";
import MovieCard from "./movieCard";

const App = () => {
  return (
    <>
      <Navbar />
      <Title />
      <MovieCard />
    </>
  );
};

export default App;
