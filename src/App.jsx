import "./App.css";
import Todo from "./components/Todo.jsx";

export default function App() {
  return (
    <div className="app">
      <h1 className="app-heading">Todojo</h1>
      {/* Render the Todo component */}
      <Todo />
    </div>
  );
}
