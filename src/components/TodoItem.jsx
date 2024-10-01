export default function TodoItem({ todo, deleteTodo, completeTodo }) {
  return (
    <li className="todo">
      <span
        className="todo-name"
        style={
          todo.isDone
            ? { textDecorationLine: "line-through", opacity: "0.5" }
            : {}
        }
      >
        {todo.task}
      </span>
      <div>
        <button className="rmv-btn btn" onClick={() => deleteTodo(todo.id)}>
          delete
        </button>
        <button
          style={todo.isDone ? { display: "none" } : {}}
          className="cmplt-btn btn"
          onClick={() => completeTodo(todo.id)}
        >
          complete
        </button></div>
    </li>
  );
}
