import { useState } from "react";

export default function TodoForm({ addNewTodo }) {
  // State to hold the new todo input
  let [newTodo, setNewTodo] = useState("");

  // Function to add new todo
  let updateTodoValue = (event) => {
    event.preventDefault();
    if (!newTodo) return;
    addNewTodo(newTodo);
    setNewTodo("");
  };

  return (
    // Todo input form
    <form onSubmit={updateTodoValue}>
      <input
        className="searchbox"
        type="text"
        value={newTodo}
        placeholder=" Add a new todo"
        onChange={(event) => setNewTodo(event.target.value)}
        // Update state on input change
      />
      {/* Button to submit the new todo */}
      <button className="submit-btn btn" type="submit">
        Add Todo
      </button>
    </form>
  );
}
