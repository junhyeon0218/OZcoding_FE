import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({
        id: Date.now(),
        text: action.payload,
        completed: false,
      });
    },

    deleteTodo: (state, action) => {
      return (
        console.log(action.payload),
        state.filter((todo) => todo.id !== action.payload)
      );
    },

    toggleTodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },

    editTodo: (state, action) => {
      state.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.text = action.payload.text;
        }
        return todo;
      });
    },

    loadState: (state, action) => {
      return action.payload;
    },
  },
});

export const { addTodo, deleteTodo, toggleTodo, editTodo, loadState } =
  todoSlice.actions;
export const todoReducer = todoSlice.reducer;
