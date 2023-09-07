import React from "react";
import "./App.css";
// import Navbar from "./components/Navbar/Navbar";
// import Main from "./components/Main/Main";

import { MovieList, Navbar } from "./components";
import Fire from "../../movie_app/src/assets/fire.png";

import Star from "../../movie_app/src/assets/glowing-star.png";
import Party from "../../movie_app/src/assets/partying-face.png";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <MovieList type="popular" title="Popular" emoji={Fire} />
      <MovieList type="top_rated" title="Top Rated" emoji={Star} />
      <MovieList type="upcoming" title="Upcoming" emoji={Party} />
    </div>
  );
};

export default App;
