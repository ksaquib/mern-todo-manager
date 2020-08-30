import React from "react";
import PDFDownload from "./PDF/PDFDownload";

function AppHeading({ styles, todos, getCompletedStatus }) {
  return (
    <div className={styles}>
      {!todos.length || getCompletedStatus() ? (
        <h1 className="banner_heading">No Tasks</h1>
      ) : (
        <h1 className="banner_heading">Todo List</h1>
      )}
      {!todos.length || getCompletedStatus() ? null : (
        <PDFDownload todos={todos} />
      )}
    </div>
  );
}

export default AppHeading;
