import React, { useState } from "react";
//Material Icons import
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Cancel from "@material-ui/icons/Cancel";
import Check from "@material-ui/icons/Check";
import { green, blueGrey } from "@material-ui/core/colors";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import PriorityModal from "./PriorityModal";
import { red, orange, yellow } from "@material-ui/core/colors";
import { useEffect } from "react";

function TodoForm({
  icon,
  done,
  text,
  handleClick,
  handleChange,
  submitHandler,
  priority,
  handlePriorityChange,
}) {
  const [priorityModal, setPriorityModal] = useState(false);
  useEffect(() => {}, [priority]);
  const openPriorityModal = () => {
    setPriorityModal(true);
  };
  const closePriorityModal = () => {
    setPriorityModal(false);
  };
  const prioritySet = (priority) => {
    if (priority == 1) {
      return { color: red[500] };
    }
    if (priority == 2) {
      return { color: orange[500] };
    }
    if (priority == 3) {
      return { color: yellow[700] };
    }

    return { color: blueGrey[500] };
  };

  return (
    <form onSubmit={(e) => submitHandler(e)} className="add_task_form">
      <div className={icon ? "add" : "add_input"}>
        {icon ? null : (
          <input
            id="task"
            name="text"
            type="text"
            value={text}
            className="task_add"
            placeholder="Enter a task here"
            onChange={(e) => handleChange(e)}
            //ref={(input) => { this.taskInput = input; }}
            autoFocus
          />
        )}
        {done ? (
          <Fab
            style={{ backgroundColor: green[500], color: "white" }}
            aria-label="add"
            component="button"
            type="submit"
            className="done"
          >
            <Check className="check_icon" />
          </Fab>
        ) : null}
        {done ? (
          <Fab
            aria-label="priority"
            component="button"
            onClick={() => openPriorityModal()}
            size="large"
            className="priority_button"
          >
            <RadioButtonCheckedIcon
              className="priority_icon"
              style={prioritySet(priority)}
            />
          </Fab>
        ) : null}
        {icon ? (
          <Fab
            color="primary"
            aria-label="add"
            component="button"
            onClick={() => handleClick(text)}
            size="large"
            className="add_button"
          >
            <AddIcon className="add_icon" />
          </Fab>
        ) : (
          <Fab
            color="secondary"
            aria-label="add"
            component="button"
            onClick={() => handleClick(text)}
            size="large"
            className="cancel_button"
          >
            <Cancel className="cancel_icon" />
          </Fab>
        )}
      </div>
      <PriorityModal
        handlePriorityChange={(e) => handlePriorityChange(e)}
        priorityModal={priorityModal}
        handleClose={closePriorityModal}
        selectedValue={priority}
      />
    </form>
  );
}

export default TodoForm;
