export default function Todo(props) {
    return (
      <div>
        <p>{props.todo.title}</p>
        <p>{props.todo.completed ? "Completd" : "Incomplete"}</p>
      </div>
    );
  }