import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoList from "./TodoList.jsx";
import TodoForm from "./TodoForm.jsx";

export default function Todo() {
  const [todos, setTodos] = useState([
    { task: "eat", id: uuidv4(), isDone: false },
    { task: "sleep", id: uuidv4(), isDone: false },
  ]);

  const addNewTodo = (todo) => {
    setTodos((prevTodos) => {
      return [...prevTodos, { task: todo, id: uuidv4(), isDone: false }];
    });
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id != id);
    });
  };

  const completeTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isDone: true,
          };
        } else {
          return todo;
        }
      });
    });
  };

  const completeAllTodo = () => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        return {
          ...todo,
          isDone: true,
        };
      });
    });
  };

  return (
    <div>
      <TodoForm addNewTodo={addNewTodo} />
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        completeTodo={completeTodo}
      />
      <button className="cmplt-btn btn" onClick={completeAllTodo}>
        Complete All
      </button>
    </div>
  );
}
