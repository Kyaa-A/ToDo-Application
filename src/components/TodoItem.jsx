export default function TodoItem({ item, todos, setTodos }) {
  function handleDelete(item) {
    console.log("Delete button", item);
    setTodos(todos.filter((todo) => todo !== item));
  }

  function handleClick(name) {
    const newArray = todos.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newArray);
  }

  const className = item.done ? "completed" : "";
  return (
    <div className="item">
      <div className="itemName">
        <span className={className} onClick={() => handleClick(item.name)}>
          {item.name}
        </span>
        <span>
          <button onClick={() => handleDelete(item)} className="deleteButton">
            X
          </button>
        </span>
      </div>
    </div>
  );
}