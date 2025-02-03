import { useState } from "react";
import "./App.css";

import TodoList from "./components/TodoList";
import { defaultTodos } from "./data";
import { Button } from "react-bootstrap"
import Sidebar from "./components/Sidebar";


function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState(defaultTodos);


  console.log(defaultTodos);
  console.log(newTodo);

  const addTodo = () => {
    const todo = {
      id: todos.length + 1,
      title: newTodo,
      completed: false,
    };
    setTodos([...todos, todo]);
    setNewTodo("");
  };

  return (
    <div className="container">
      <h1>Getting To It</h1>
      <Sidebar newTodo={newTodo} setNewTodo={setNewTodo} addTodo={addTodo}/>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;