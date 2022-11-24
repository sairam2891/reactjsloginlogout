import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import posts from "./posts";
import users from "./users";

export default combineReducers({
  auth,
  message,
  posts,
  users
});