import TodoItem from "./TodoItem";

export default function TodoList({ todos }) {
  return (
    <div className="list">
      {todos.map((item) => (
        <TodoItem key={item} item={item} />
      ))}
    </div>
  );
}
