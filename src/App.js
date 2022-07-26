/* eslint-disable no-lone-blocks */
import React, { useState , useEffect} from "react";
import InputForm from "./Components/InputForm";
import Tabs from "./Components/Tabs";
import Todo from "./Components/Todo";
import { nanoid } from "nanoid";
import HeadComponent from "./Components/HeadComponent";
/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable */

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);
  const [filteredItems, setFilteredItems] = useState(props.tasks);
{
  useEffect(() => {
    const listFrom = JSON.parse(localStorage.getItem("name"));
    if (listFrom?.length > 0) {
      setTasks(listFrom);
      setFilteredItems(listFrom);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(tasks));
  }, [tasks]);
}

  const taskList = filteredItems
  .map(task => (
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

  function addTask(name) {
    const newTask = { id: "todo"+ nanoid(), name: name, completed: false };
    const newTasks = [...tasks, newTask];
    setTasks(newTasks);
    setFilteredItems(newTasks);
  }

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map((task) => {

      if (id === task.id) {
        
        return {...task, completed: !task.completed};
      }
      return task;
    });
    setTasks(updatedTasks);
    setFilteredItems(updatedTasks);
  }

  function deleteTask(id) {
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
  }

  function editTask(id, newName) {
    const editedTaskList = tasks.map((task) => {

      if (id === task.id) {
        return {...task, name: newName};
      }
      return task;
    });
    setTasks(editedTaskList);
  }

  //ALL TASKS......
  const handleAllListClick = () => {
    setFilteredItems(tasks);
  };
  // COMPLETED TASKS.....
  const handleCompletedListClick = () => {
    const updatedTasks = tasks.filter((task) => {
      return task.completed === true;
    });
    setFilteredItems(updatedTasks);
  };
  //ALL ACTIVE TASKS....
  const handleActiveListClick = () => {
    const activeTasks = tasks.filter((task) => {
      return task.completed === false;
    });
    setFilteredItems(activeTasks);
  };
  
   
return (
    <div className="app">
      <HeadComponent/>
      <InputForm task={taskList} handleAddButtonClick={addTask}/>
      <br/>
      <div>
        <Tabs onAllListClick={handleAllListClick}
          onCompletedListClick={handleCompletedListClick}
          onActiveListClick={handleActiveListClick} />
      </div>
      <div>
      <ul
        role="list"
        className="unorderedlists"
      >
       {taskList}
       </ul>
      </div>
    </div>
  );
}


export default App;
