import { useState } from "react";
export default function Form({ todos, setTodos }) {
  // const [todo, setTodo] = useState("");
  const [todo, setTodo] = useState({ name: "", done: false });

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  }

  return (
    <form className="todoForm" onSubmit={handleSubmit}>
      <input
        className="modernInput"
        onChange={(e) => setTodo({name:e.target.value, done: false})}
        value={todo.name}
        type="text"
        placeholder="Enter your todo"
      />
      <button className="form_submit" type="submit">
        Add Todo
      </button>
    </form>
  );
}
