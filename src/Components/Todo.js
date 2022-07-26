import React, { useState } from "react";


export default function Todo(props) {
  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState('');

  function handleChange(e) {
    setNewName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.editTask(props.id, newName);
    setNewName("");
    setEditing(false);
  }
  
  
  const editingTemplate = (
    <form  onSubmit={handleSubmit}>
      <div>
        <input 
          id={props.id}
          type="text" 
          value={newName}
          onChange={handleChange}
          />
      </div>
      <div>
        <button type="button" className="cancelbutton" onClick={() => setEditing(false)}>
          Cancel
        </button>
        <button type="submit"className="savebutton" >
          Save
        </button>
      </div>
    </form>
  );
  const viewTemplate = (
    <div>
      <div>
          <input
            id={props.id}
            type="checkbox"
            defaultChecked={props.completed}
            onChange={() => props.toggleTaskCompleted(props.id)}
          />
          <label htmlFor={props.id}>
            {props.name}
          </label>
        </div>
        <div>
          <button type="button" className="editbutton" onClick={() => setEditing(true)}>
            Edit 
          </button>
          <button
            type="button"
            className="deletebutton"
            onClick={() => props.deleteTask(props.id)}
          >
            Delete 
          </button>
        </div>
    </div>
  );
  
    return (
      <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>
    );
  }
  