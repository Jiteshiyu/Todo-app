import TodoItem from "./TodoItem.jsx";

export default function TodoList({ todos, deleteTodo, completeTodo }) {
  return (
    <div>
      <h2 className="list-title">Tasks to do:</h2>
      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoItem
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
