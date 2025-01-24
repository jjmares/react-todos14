import TodoList from "./components/TodoList";
import { defaultTodos } from "./data";


function App() {
  console.log(defaultTodos);

  return (
     <div>
      <TodoList todos={defaultTodos} />
     </div>
  );
}

export default App;
