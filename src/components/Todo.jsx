import "./Todo.css";

import { Button } from "react-bootstrap";


export default function Todo({ todo }) {
  return (
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
}






/*export default function Todo(props) {
  return (
    <div>
      <p>{props.todo.title}</p>
      <p>{props.todo.completed ? "Completed" : "Incomplete"}</p>
    </div>
  );
}
*/