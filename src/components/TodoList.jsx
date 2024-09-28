import TodoItem from "./TodoItem.jsx";

export default function TodoList({ todos, deleteTodo, completeTodo }) {
  return (
    <div>
      <h2>Tasks to do:</h2>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={() => deleteTodo(todo.id)} // Function to delete the todo
            completeTodo={() => completeTodo(todo.id)} // Function to complete the todo
          />
        ))}
      </ul>
    </div>
  );
}
