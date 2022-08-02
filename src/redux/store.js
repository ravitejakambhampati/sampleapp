import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./todoReducer";

const store = configureStore({
  reducer: todoReducer,
});

export default store;
