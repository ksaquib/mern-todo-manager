import React from "react";
//Material Imports
import AddCircleIcon from "@material-ui/icons/AddCircle";
import ListAltIcon from "@material-ui/icons/ListAlt";

function EmptyTodo({ styles, handleClick }) {
  return (
    <div className={styles}>
      <ListAltIcon className="empty_todo_icon" />
      <h1 className="empty_todo_heading">Let's get to work</h1>

      <AddCircleIcon
        className="empty_todo_add"
        color="primary"
        onClick={() => handleClick()}
      />
      <h3 className="empty_todo_text">Add a task</h3>
    </div>
  );
}

export default EmptyTodo;
