const initialState = {
  task: [
    { tasca: "tasca 1", estat: "Not Done" },
    { tasca: "tasca 2", estat: "Not Done" },
  ],
};

const todolistReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK_TODOLIST":
      let copy = [...state.task];
      copy.push({ tasca: action.payload, estat: "Not Done" });
      return { task: copy };
    case "ELIMINATE_TASK_TODOLIST":
      let copy2 = [...state.task];
      copy2.splice(action.payload, 1);
      return { task: copy2 };
    case "CHANGE_STATE":
      let copy3 = [...state.task];
      copy3[action.payload].estat === "Not Done"
        ? (copy3[action.payload].estat = "Done")
        : (copy3[action.payload].estat = "Not Done");
      return { task: copy3 };
    default:
      return state;
  }
};

export default todolistReducer;
