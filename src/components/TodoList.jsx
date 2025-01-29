import { ListGroup } from "react-bootstrap";
import Todo from "./Todo";

export default function TodoList({ todos }) {
  console.log(todos);

  return (
    <ListGroup>
      {todos.map((todo) => (
        <ListGroup.Item key={todo.id}>
          <Todo todo={todo} />
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}



/*export default function TodoList({ todos }) {
  console.log("Todolist", todos);
  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
}*/