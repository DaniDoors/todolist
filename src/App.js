import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
  addTaskTodolist,
  eliminateTaskTodolist,
} from "./redux/actions/todolistActions";

// const tasques = ["u", "dos", "tres"];

function App() {
  const [tascaNova, setTascaNova] = useState("");
  const llistaTasques = useSelector((store) => store.todolistReducer.task);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {llistaTasques.map((i) => (
            <li key={i}>
              {i}{" "}
              <span onClick={dispatch(eliminateTaskTodolist(2))}>&#10007;</span>
            </li>
          ))}
        </ul>
        To Do List
        <input
          placeholder="No te pases q uno se cansa"
          value={tascaNova}
          onChange={(event) => setTascaNova(event.target.value)}
        />
        <button onClick={() => dispatch(addTaskTodolist(tascaNova))}>
          Afegir tasca
        </button>
      </header>
    </div>
  );
}

export default App;
