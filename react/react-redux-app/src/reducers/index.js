import { combineReducers } from "redux";
import todos from "./todos";
import counter from "./counter";
import posts from "./posts";

const rootReducer = combineReducers({
  todos: todos,
  counter: counter,
  posts: posts,
});

export default rootReducer;
