export const addTaskTodolist = (tasca) => {
  return {
    type: "ADD_TASK_TODOLIST",
    payload: tasca,
  };
};
export const eliminateTaskTodolist = (posicio) => {
  return {
    type: "ELIMINATE_TASK_TODOLIST",
    payload: posicio,
  };
};
export const changeTodolistState = (posicio) => {
  return {
    type: "CHANGE_STATE",
    payload: posicio,
  };
};
