import { createSlice } from "@reduxjs/toolkit";

const initialState = { tasks: [] };
const createTodoReducer = createSlice({
  name: "todos",
  initialState,
  reducers: {
    // createTodo: (state, action) => {
    //   state.push(action.payload);
    //   return state;
    // },
    // deleteTodo: (state, action) => {
    //   return state.filter((item) => item.id !== action.payload);
    // },
    // updateTodo: (state, action) => {
    //   return state.map((todo) => {
    //     if (todo.id === action.payload.id) {
    //       return {
    //         ...todo,
    //         item: action.payload.item,
    //       };
    //     }
    //     return todo;
    //   });
    // },
    updateTodoList: (state, action) => {
      return { tasks: action.payload };
    },
  },
});

export const { updateTodoList } = createTodoReducer.actions;
export const todoReducer = createTodoReducer.reducer;
