import React from "react";
import "./App.css";
// import Navbar from "./components/Navbar/Navbar";
// import Main from "./components/Main/Main";

import { MovieList, Navbar } from "./components";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <MovieList />
    </div>
  );
};

export default App;
