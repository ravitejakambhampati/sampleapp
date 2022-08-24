import { createSlice } from "@reduxjs/toolkit";

const initialState = { tasks: [] };
const createTodoReducer = createSlice({
  name: "todos",
  initialState,
  reducers: {
    updateTodoList: (state, action) => {
      return { tasks: action.payload };
    },
    addTodo: (state) => {
      return { ...state };
    },
    deleteTodo: (state) => {
      return { ...state };
    },
    updateTodo: (state) => {
      return { ...state };
    },
    getTodo: (state) => {
      return { ...state };
    },
  },
});

export const { updateTodoList, addTodo, deleteTodo, updateTodo, getTodo } =
  createTodoReducer.actions;
export const todoReducer = createTodoReducer.reducer;
