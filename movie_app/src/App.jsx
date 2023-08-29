import React from "react";
import "./App.css";
// import Navbar from "./components/Navbar/Navbar";
// import Main from "./components/Main/Main";

import { Navbar, Main } from "./components";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Main />
    </div>
  );
};

export default App;
