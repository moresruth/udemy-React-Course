import React from "react";
import "./App.css";
import FilterComponent from "./components/FilterComponent";

const App = () => {
  // const data = {
  //   optionOne: ["Item 1", "Item 2", "Item 3"],
  //   optionTwo: ["Item A", "Item B", "Item C"],
  // };

  return (
    <div className="app">
      {/* <h1>Filter Component Example</h1> */}

      <FilterComponent />
    </div>
  );
};

export default App;
