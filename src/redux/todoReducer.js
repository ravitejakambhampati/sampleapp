import { createSlice } from "@reduxjs/toolkit";

const initialState = { tasks: [] };
const createTodoReducer = createSlice({
  name: "todos",
  initialState,
  reducers: {
    updateTodoList: (state, action) => {
      return { tasks: action.payload };
    },
  },
});

export const { updateTodoList } = createTodoReducer.actions;
export const todoReducer = createTodoReducer.reducer;
