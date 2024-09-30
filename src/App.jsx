import "./App.css";
import Todo from "./components/Todo.jsx";

export default function App() {
  return (
    <div className="app-container"> {/* Main application */}
      <div className="app-img"> {/* Main application */}
        <img src="https://plus.unsplash.com/premium_photo-1681487870238-4a2dfddc6bcb" alt="todo-img"></img>
      </div>
      <div className="app"> {/* Main application */}
        <h1 className="app-heading">Todojo</h1>
        <Todo /> {/* Render the Todo component */}
      </div>
    </div>
  );
}
