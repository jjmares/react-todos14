import "./Todo.css";

import React from "react";


export default function Todo({ todo, toggleComplete, deleteTodo }) {
  return (
    <li className={todo.completed ? "completed" : ""}>
    <span>{todo.text}</span>
    <button className="complete-btn" onClick={() => toggleComplete(todo.id)}>
        {todo.completed ? "Undo" : "Complete"}
    </button>
        <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>
            Delete
        </button>
    </li>
  );
}

















  /*  return (
    <div className="todo">
      <p className={todo.completed ? "todo-title-completed " : ""}>
        {todo?.title}
      </p>
      <div className="btn-group">
        <Button variant="outline-primary">
          {todo.completed ? "Undo" : "Complete"}
        </Button>
        <Button variant="outline-danger">Delete</Button>
      </div>
    </div>
  );
} */