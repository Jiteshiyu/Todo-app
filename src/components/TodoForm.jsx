import { useState } from "react";

export default function TodoForm({ addNewTodo }) {
  // State to hold the new todo input
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
        placeholder="Add a new todo"
        onChange={(event) => setNewTodo(event.target.value)} // Update state on input change
      />
      <button className="submit-btn btn" type="submit">
        Add Todo {/* Button to submit the new todo */}
      </button>
    </form>
  );
}
