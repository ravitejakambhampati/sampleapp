/* eslint-disable no-lone-blocks */
import React, { useState, useEffect } from "react";
import InputForm from "./Components/InputForm";
import Tabs from "./Components/Tabs";
import Todo from "./Components/Todo";
import HeadComponent from "./Components/HeadComponent";
import TodoApi from "./Components/TodoApi";
/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable */

const ALL = "ALL";
const ACTIVE = "ACTIVE";
const COMPLETED = "COMPLETED";

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);
  const [activeTab, setActiveTab] = useState(ALL);

  useEffect(() => {
    async function getList() {
      const apiTodoData = await TodoApi.getTodos();
      setTasks(apiTodoData.data.todoList);
    }

    getList();
  }, []);

  const getFilteredTasks = () => {
    if (activeTab === ALL) {
      return tasks;
    } else if (activeTab === ACTIVE) {
      const activeTasks = tasks.filter((task) => {
        return task.completed === false;
      });
      return activeTasks;
    } else if (activeTab === COMPLETED) {
      const updatedTasks = tasks.filter((task) => {
        return task.completed === true;
      });
      return updatedTasks;
    }

    return tasks;
  };

  const taskList = getFilteredTasks().map((task) => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
      editTask={editTask}
    />
  ));

  async function addTask(name) {
    const apiAddTodoData = await TodoApi.createTodo({ name: name });
    setTasks(apiAddTodoData.data.todoList);
  }

  async function toggleTaskCompleted(id, name, completed) {
    const updateTodoData = await TodoApi.updateTodo({ id, name, completed });
    setTasks(updateTodoData.data.todoList);
  }

  async function deleteTask(id) {
    const apiDeleteTodoData = await TodoApi.deleteTodo({ id });
    setTasks(apiDeleteTodoData.data.todoList);
  }

  async function editTask(id, name, completed) {
    const apiUpdateTodoData = await TodoApi.updateTodo({ id, name, completed });
    setTasks(apiUpdateTodoData.data.todoList);
  }

  //ALL TASKS......
  const handleAllListClick = () => {
    setActiveTab(ALL);
  };

  // ACTIVE TASKS....
  const handleActiveListClick = () => {
    setActiveTab(ACTIVE);
  };

  // COMPLETED TASKS.....
  const handleCompletedListClick = () => {
    setActiveTab(COMPLETED);
  };

  return (
    <div className="app">
      <HeadComponent />
      <InputForm task={taskList} handleAddButtonClick={addTask} />
      <br />
      <div>
        <Tabs
          onAllListClick={handleAllListClick}
          onCompletedListClick={handleCompletedListClick}
          onActiveListClick={handleActiveListClick}
          activeTab={activeTab}
        />
      </div>
      <div>
        <ul role="list" className="unorderedlists">
          {taskList}
        </ul>
      </div>
    </div>
  );
}

export default App;
