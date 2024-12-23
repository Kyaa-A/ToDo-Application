export default function TodoItem({ item, todos, setTodos }) {
  function handleDelete(item) {
    console.log("Delete button", item);
    setTodos(todos.filter((todo) => todo !== item));
    
  }

  return (
    <div className="item">
      <div className="itemName">
        {item}
        <span>
          <button onClick={() => handleDelete(item)} className="deleteButton">
            X
          </button>
        </span>
      </div>
    </div>
  );
}
