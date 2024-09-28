export default function TodoItem({ todo, deleteTodo, completeTodo }) {
  return (
    <li>
      <span
        className="todo"
        style={
          todo.isDone
            ? { textDecorationLine: "line-through", opacity: "0.5" }
            : {}
        }
      >
        {todo.task} {/* Displaying the todo task */}
      </span>
      <button className="rmv-btn btn" onClick={() => deleteTodo(todo.id)}>
        delete {/* Button to delete the todo */}
      </button>
      <button
        style={todo.isDone ? { display: "none" } : {}} // Hide button if task is completed
        className="cmplt-btn btn"
        onClick={() => completeTodo(todo.id)}
      >
        complete {/* Button to mark the todo as completed */}
      </button>
    </li>
  );
}
