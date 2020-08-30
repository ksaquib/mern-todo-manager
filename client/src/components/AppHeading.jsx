import React from "react";
import PDFDownload from "./PDF/PDFDownload";

function AppHeading({ styles, todos, getCompletedStatus, currentList }) {
  const activeHeader = (todos, getCompletedStatus) =>
    !todos.length || getCompletedStatus() ? (
      <h1 className="banner_heading">No Tasks</h1>
    ) : (
      <h1 className="banner_heading">Todo List</h1>
    );
  const completedHeader = (todos) =>
    !todos.length ? (
      <h1 className="banner_heading">No Tasks</h1>
    ) : (
      <h1 className="banner_heading">Archived List</h1>
    );
  return (
    <div className={styles}>
      {currentList == "active" && activeHeader(todos, getCompletedStatus)}
      {currentList == "completed" && completedHeader(todos, getCompletedStatus)}
    </div>
  );
}

export default AppHeading;
