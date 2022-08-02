import React, { useState } from "react";
// import { connect } from "react-redux";
// import { createTodo, deleteTodo } from "../redux/todoReducer";
// import { updateTodo } from "../redux/todoReducer";

// const mapStateToProps = (state) => {
//   return {
//     todos: state,
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     addTodo: (name) => dispatch(createTodo(name)),
//     removeTodo: (id) => dispatch(deleteTodo(id)),
//     updateTodo: (id, name, completed) =>
//       dispatch(updateTodo(id, name, completed)),
//   };
// };

function InputForm({ handleAddButtonClick }) {
  const [name, setName] = useState("");

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleAddButtonClick(name);
    setName("");
    localStorage.setItem("name", name);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="formdata"
        placeholder="Enter Your Task To Be Added"
        value={name}
        autoComplete="off"
        onChange={handleChange}
      />
      <button type="submit" className="add-button">
        Add
      </button>
    </form>
  );
}

export default InputForm;
