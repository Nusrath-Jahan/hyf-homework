import { TodoProvider } from "./TodoContext";
import TodoListPage from "./TodoListPage";

export default function App() {
  return (
    <TodoProvider>
      <TodoListPage />
    </TodoProvider>
  );
}
