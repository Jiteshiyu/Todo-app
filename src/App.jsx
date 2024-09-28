import "./App.css";
import Todo from "./components/Todo.jsx";

export default function App() {
  return (
    <div className="app"> {/* Main application */}
      <h1 className="app-heading">Todojo</h1>
      <Todo /> {/* Render the Todo component */}
    </div>
  );
}
