import TodoApi from "../Components/TodoApi";
import {
  updateTodoList,
  addTodo,
  deleteTodo,
  updateTodo,
  getTodo,
} from "../redux/todoReducer";
import { put, takeLatest } from "redux-saga/effects";

export function* addTodoSaga({ payload: { name } }) {
  const addApiData = yield TodoApi.createTodo({ name });
  yield put(updateTodoList(addApiData.data.todoList));
}

export function* deleteTodoSaga({ payload: { id } }) {
  const deleteApiData = yield TodoApi.deleteTodo({ id });
  yield put(updateTodoList(deleteApiData.data.todoList));
}

export function* updateTodoSaga({ payload: { id, name, completed } }) {
  const updateApiData = yield TodoApi.updateTodo({ id, name, completed });
  yield put(updateTodoList(updateApiData.data.todoList));
}

export function* getTodoSaga() {
  const getApiData = yield TodoApi.getTodos();
  yield put(updateTodoList(getApiData.data.todoList));
}

function* todoSaga() {
  yield takeLatest(addTodo, addTodoSaga);
  yield takeLatest(deleteTodo, deleteTodoSaga);
  yield takeLatest(updateTodo, updateTodoSaga);
  yield takeLatest(getTodo, getTodoSaga);
}

export default todoSaga;
