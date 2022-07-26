import React, { useState } from 'react'

function InputForm({handleAddButtonClick}) {
   const [name, setName] = useState("");

function handleChange(e) {
  setName(e.target.value);
}

function handleSubmit(e) {
  e.preventDefault();
  handleAddButtonClick(name)
  setName("");
  localStorage.setItem("name", name);
}

return (
    <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="formdata"
          value={name}
          autoComplete="off"
          onChange={handleChange}
        />
        <button type="submit" className="add-button" >
          Add
        </button>
      </form>
    
  )
}

export default InputForm