export default function TodoItem({ todo, deleteTodo, completeTodo }) {
  return (
    // Display a todo task
    <li className="todo">
      <span
        className="todo-name"
        style={
          todo.isDone
            ? { textDecorationLine: "line-through", opacity: "0.8" }
            : {}
        }
      >
        {todo.task}
      </span>

      <div>
        {/* Button to delete the current todo item */}
        <button className="rmv-btn btn" onClick={() => deleteTodo(todo.id)}>
          delete
        </button>

        {/* Button to mark the todo item as complete. */}
        <button
          style={todo.isDone ? { display: "none" } : {}}
          className="cmplt-btn btn"
          onClick={() => completeTodo(todo.id)}
        >
          complete
        </button>
      </div>
    </li>
  );
}
