import { useState } from "react";

export default function TodoForm({ addNewTodo }) {
  let [newTodo, setNewTodo] = useState("");

  let updateTodoValue = (event) => {
    event.preventDefault();
    if (!newTodo) return;
    addNewTodo(newTodo);
    setNewTodo("");
  };

  return (
    <form onSubmit={updateTodoValue}>
      <input
        className="searchbox"
        type="text"
        value={newTodo}
        onChange={(event) => setNewTodo(event.target.value)}
      />
      <button className="submit-btn btn" type="submit">
        Add Todo
      </button>
    </form>
  );
}
