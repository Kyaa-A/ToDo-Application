import TodoItem from "./TodoItem";

export default function TodoList({ todos, setTodos }) {
  return (
    <div className="list">
      {todos.map((item) => (
        <TodoItem key={item} item={item} todos={todos} setTodos={setTodos} />
      ))}
    </div>
  );
}
