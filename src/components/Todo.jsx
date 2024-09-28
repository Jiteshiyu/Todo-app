import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoList from "./TodoList.jsx";
import TodoForm from "./TodoForm.jsx";

export default function Todo() {
  // Initial state for todos
  const [todos, setTodos] = useState([
    { task: "eat", id: uuidv4(), isDone: false },
    { task: "sleep", id: uuidv4(), isDone: false },
  ]);

  // Function to add a new todo
  const addNewTodo = (todo) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { task: todo, id: uuidv4(), isDone: false },
    ]);
  };

  // Function to delete a todo
  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  // Function to mark a todo as complete
  const completeTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isDone: true } : todo
      )
    );
  };

  // Function to mark all todos as complete
  const completeAllTodo = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => ({ ...todo, isDone: true }))
    );
  };

  return (
    <div>
      <TodoForm addNewTodo={addNewTodo} /> {/* Form to add new todos */}
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        completeTodo={completeTodo}
      />
      <button className="cmplt-btn btn" onClick={completeAllTodo}>
        Complete All {/* Button to complete all todos */}
      </button>
    </div>
  );
}
