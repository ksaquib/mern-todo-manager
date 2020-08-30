import authReducer from "../redux/reducers/authReducer";
import errorReducer from "../redux/reducers/errorReducer";
import { combineReducers } from "redux";
import itemReducer from "./reducers/itemReducer";

export default combineReducers({
  auth: authReducer,
  todos: itemReducer,
  error: errorReducer,
});
