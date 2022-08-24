import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./todoReducer";
import createSagaMiddleware from "redux-saga";
import todoSaga from "../saga/todoSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: todoReducer,
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(todoSaga);
export default store;
