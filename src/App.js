import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
  addTaskTodolist,
  changeTodolistState,
  eliminateTaskTodolist,
} from "./redux/actions/todolistActions";

function App() {
  const [tascaNova, setTascaNova] = useState("");
  const [estatButo, setEstatButo] = useState("All");
  const llistaTasques = useSelector((store) => store.todolistReducer.task);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <label>
            <input
              type="radio"
              name="filtre"
              value="All"
              onClick={() => setEstatButo("All")}
            />
            All
          </label>
          <label>
            <input
              type="radio"
              name="filtre"
              value="Done"
              onClick={() => setEstatButo("Done")}
            />
            Done
          </label>
          <label>
            <input
              type="radio"
              name="filtre"
              value="Not Done"
              onClick={() => setEstatButo("Not Done")}
            />
            Not Done
          </label>
        </div>
        <ul>
          {llistaTasques.map((i, j) => (
            <li key={j}>
              {i.tasca}{" "}
              <span
                className="DoneNot"
                onClick={() => dispatch(changeTodolistState(j))}
              >
                {i.estat}
              </span>
              <span
                className="Cancel"
                onClick={() => dispatch(eliminateTaskTodolist(j))}
              >
                &#10007;
              </span>
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
