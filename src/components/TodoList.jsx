import TodoItem from "./TodoItem.jsx";

export default function TodoList({ todos, deleteTodo, completeTodo }) {
  return (
    <div>
      {/* Title for the todo list */}
      <h2 className="list-title">Tasks to do:</h2>

      {/* Render the list of todos */}
      <ul className="todo-list">
        {/* Map through the todos array and render a TodoItem for each todo */}
        {todos.map((todo) => (
          <TodoItem
            // Provide a unique key for each item
            key={todo.id}
            todo={todo}
            deleteTodo={() => deleteTodo(todo.id)}
            completeTodo={() => completeTodo(todo.id)}
          />
        ))}
      </ul>
    </div>
  );
}
