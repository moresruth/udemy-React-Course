import React from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";

import { MovieList, Navbar } from "./components";
import Fire from "../../movie_app/src/assets/fire.png";

import Star from "../../movie_app/src/assets/glowing-star.png";
import Party from "../../movie_app/src/assets/partying-face.png";
import SingleMovie from "./components/MovieList/SingleMovie";

const App = () => {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Routes>
          <Route
            path="/"
            element={<MovieList type="popular" title="Popular" emoji={Fire} />}
          />
          <Route
            path="/top_rated"
            element={
              <MovieList type="top_rated" title="Top Rated" emoji={Star} />
            }
          />
          <Route
            path="/upcoming"
            element={
              <MovieList type="upcoming" title="Upcoming" emoji={Party} />
            }
          />
          <Route path="/movie/:movieId" element={<SingleMovie />} />
        </Routes>
      </main>
      {/* <MovieList type="popular" title="Popular" emoji={Fire} /> */}
      {/* <MovieList type="top_rated" title="Top Rated" emoji={Star} /> */}
      {/* <MovieList type="upcoming" title="Upcoming" emoji={Party} /> */}
    </div>
  );
};

export default App;
