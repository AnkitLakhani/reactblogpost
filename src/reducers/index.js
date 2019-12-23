import { combineReducers } from "redux";
import postReducer from "./postReducer";
import userReducer from "./usersReducers";

export default combineReducers({
  post: postReducer,
  users: userReducer
});
