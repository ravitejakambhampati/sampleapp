import React, { useState } from "react";
import PropTypes from "prop-types";
export default function Todo({
  editTask,
  id,
  completed,
  toggleTaskCompleted,
  name,
  deleteTask,
}) {
  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState("");

  function handleChange(e) {
    setNewName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    editTask(id, newName, completed);
    setNewName("");
    setEditing(false);
  }

  const editingTemplate = (
    <form onSubmit={handleSubmit}>
      <div>
        <input id={id} type="text" value={newName} onChange={handleChange} />
      </div>
      <div>
        <button
          type="button"
          className="cancelbutton"
          onClick={() => setEditing(false)}
        >
          Cancel
        </button>
        <button type="submit" className="savebutton">
          Save
        </button>
      </div>
    </form>
  );
  const viewTemplate = (
    <div>
      <div>
        <input
          id={id}
          type="checkbox"
          defaultChecked={completed}
          onChange={() => toggleTaskCompleted(id, name, !completed)}
        />
        <label htmlFor={id}>{name}</label>
      </div>
      <div>
        <button
          type="button"
          className="editbutton"
          onClick={() => setEditing(true)}
        >
          Edit
        </button>
        <button
          type="button"
          className="deletebutton"
          onClick={() => deleteTask(id)}
        >
          Delete
        </button>
      </div>
    </div>
  );

  return <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>;
}

Todo.propTypes = {
  editTask: PropTypes.func,
  id: PropTypes.string,
  completed: PropTypes.bool,
  toggleTaskCompleted: PropTypes.func,
  name: PropTypes.string,
  deleteTask: PropTypes.func,
};
