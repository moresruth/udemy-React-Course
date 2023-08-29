// import React, { useState } from "react";
import { useState } from "react";

const CreateTodo = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const tasks = ["Task 1", "Task 2", "Task 3"];

  const handleClick = () => {
    setCount(count + 1);
  };

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <>
      <h1>Tasks {count}</h1>
      <input type="text" onChange={handleChange} />
      <button onClick={handleClick} value="Add Task Button">
        Add Task
      </button>
      <h1>Input: {input}</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task}>{task}</li>
        ))}
      </ul>
    </>
  );
};

export default CreateTodo;

// State
//  allows us to manage and display the changing data in our application.
// normal variable adn state variavle
// state is used to tell react, watch this variable and if it change then reflect on the DOM

// hooks are the functions to use some react features in functional components.
// in other words, hooks are functions that make functional components work like class components
