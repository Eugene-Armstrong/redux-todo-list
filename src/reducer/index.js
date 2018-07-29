import Todo from "../model/Todo";

export default (state = { todos: [], statusOfList: Todo.ALL, status: "read" }, action) => {

  switch (action.type) {
    case "ADD_ITEM": {
      const newState = JSON.parse(JSON.stringify(state));
      newState.todos = action.todos;
      return newState;
    }
    case "SHOW_FILTER": {
      const newState = JSON.parse(JSON.stringify(state));
      newState.todos = action.todos;
      newState.statusOfList = action.statusOfList;
      return newState;
    }
    case "UPDATE_ITEM_CONTENT": {
      const newState = JSON.parse(JSON.stringify(state));
      newState.todos = action.todos;
      return newState;
    }
    case "TOGGLE_ACTIVE": {
      const newState = JSON.parse(JSON.stringify(state));
      newState.todos = action.todos;
      return newState;
    }
    case "CHANGE_STATUS": {
      const newState = JSON.parse(JSON.stringify(state));
      newState.status = action.status;
      return newState;
    }
    default:
      return state;
  }
}