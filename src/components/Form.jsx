import { useState } from "react";
export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  }

  return (
    <form className="todoform" onSubmit={handleSubmit}>
      <input
        className="modernInput"
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
        type="text"
        placeholder="Enter your todo"
      />
      <button className="form_submit" type="submit">
        Add Todo
      </button>
    </form>
  );
}
