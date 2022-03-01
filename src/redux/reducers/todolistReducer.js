const initialState = {
  task: [],
};

const todolistReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK_TODOLIST":
      let copy = [...state.task];
      console.log(copy);
      console.log(action.payload);
      copy.push(action.payload);
      console.log(copy);
      return { task: copy };
    case "ELIMINATE_TASK_TODOLIST":
      return state;
    default:
      return state;
  }
};

export default todolistReducer;
