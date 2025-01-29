import "./App.css";

import { Button } from "react-bootstrap";
import TodoList from "./components/TodoList";
import { defaultTodos } from "./data";


function App() {
  console.log(defaultTodos);

  return (
    <div className="container">
      <h1>Getting To It</h1>
      <Button className="mt-2 mb-2">Add Task</Button>
      <TodoList todos={defaultTodos} />
    </div>
  );
}

export default App;
