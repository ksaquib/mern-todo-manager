import React from "react";
//Material Imports
import AddCircleIcon from "@material-ui/icons/AddCircle";
import ListAltIcon from "@material-ui/icons/ListAlt";
import ArchiveIcon from "@material-ui/icons/Archive";

function EmptyTodo({ styles, handleClick, heading, type, typeHeading }) {
  return (
    <div className={styles}>
      <ListAltIcon className="empty_todo_icon" />
      <h1 className="empty_todo_heading">{heading}</h1>

      {type == "active" && (
        <AddCircleIcon
          className="empty_todo_add"
          color="primary"
          onClick={() => handleClick()}
        />
      )}
      {type == "completed" && (
        <ArchiveIcon
          className="empty_todo_add"
          color="primary"
          onClick={() => handleClick()}
        />
      )}
      <h3 className="empty_todo_text">{typeHeading}</h3>
    </div>
  );
}

export default EmptyTodo;
