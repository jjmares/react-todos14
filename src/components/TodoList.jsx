//import { ListGroup } from "react-bootstrap";
import Todo from "./Todo";
import React from "react";

export default function TodoList({ todos, toggleComplete, deleteTodo }) {
  return (
      <ul>
          {todos.length > 0 ? (
              todos.map(todo => (
                <Todo key={todo.id} todo={todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
              ))
          ) : (
              <p>No tasks needed.</p>
          )}
      </ul>
  );
}

















  /*  console.log(todos);

  return (
    <ListGroup>
      {todos.map((todo) => (
        <ListGroup.Item key={todo.id}>
          <Todo todo={todo} />
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
} */
