import Todo from "./Todo";
export default function TodoList({ todos }) {
  console.log("Todolist", todos);
  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
}