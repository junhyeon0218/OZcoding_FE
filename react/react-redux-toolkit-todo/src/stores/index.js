import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./todoSlice";

// store
export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});
