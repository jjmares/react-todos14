import "./App.css";
import React, { useState } from "react";

import TodoList from "./components/TodoList";
import Sidebar from "./components/Sidebar";

import { defaultTodos } from "./data";

function App() {
  const [todos, setTodos] = useState(defaultTodos);

  // Function to add a new task
  const addTodo = (todoText) => {
      if (todoText.trim() !== "") {
          const newTodo = { id: todos.length + 1, text: todoText, completed: false };
          setTodos([...todos, newTodo]);
      }
  };

  // Toggle task completion
  const toggleComplete = (id) => {
    setTodos(todos.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
};

  // Function to delete a task
  const deleteTodo = (id) => {
      setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
      <div className="app-container">
        <h1>Getting To It!</h1>
          <Sidebar addTodo={addTodo} />
          <TodoList todos={defaultTodos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
      </div>
  );
}

export default App;






/*function App() {
  console.log(defaultTodos);

  return (
    <div className="container">
      <h1>Getting To It</h1>
      <Sidebar/>
      <TodoList todos={defaultTodos} />
    </div>
  );
}*/