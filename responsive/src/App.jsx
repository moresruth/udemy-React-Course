import React from "react";
import "./styles/App.css";
import Sidebar from "./components/Sidebar";
import MainComponent from "./components/MainComponent";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <MainComponent />
      <Navbar />
    </div>
  );
}

export default App;
