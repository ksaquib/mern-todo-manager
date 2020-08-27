import todoReducer from "./reducers/todo/fetchTodo";
import { combineReducers } from "redux";
export default combineReducers({
  todo: todoReducer,
});
