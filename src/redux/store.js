import { createStore, combineReducers } from "redux";
import todolistReducer from "./reducers/todolistReducer";

const appReducer = combineReducers({
  todolistReducer: todolistReducer,
});

export default createStore(appReducer);
