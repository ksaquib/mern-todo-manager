import React, { useState, useEffect } from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Cancel from "@material-ui/icons/Cancel";
import Check from "@material-ui/icons/Check";
import { green } from "@material-ui/core/colors";
import Fab from "@material-ui/core/Fab";

function EditModal({
  modal,
  handleClose,
  handleUpdate,
  handleChangeUpdate,
  currentTodo,
}) {
  console.log(currentTodo.task);

  const [updatedTask, setupdatedTask] = useState();
  useEffect(() => {
    setupdatedTask(currentTodo.task);
  }, [currentTodo.task]);

  console.log(updatedTask);
  const handleChange = ({ target: { value } }) => {
    setupdatedTask(value);
    handleChangeUpdate(value);
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className="todo_modal"
      open={modal}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={modal}>
        <div className="todo_modal_content">
          <input
            id="task_update"
            name="updatedTask"
            type="text"
            placeholder="Update Your Task"
            value={updatedTask}
            onChange={handleChange}
            className="task_update"
          />
          <Fab
            color="secondary"
            aria-label="add"
            component="button"
            onClick={handleClose}
            size="large"
          >
            <Cancel />
          </Fab>
          <Fab
            style={{ backgroundColor: green[500], color: "white" }}
            aria-label="add"
            component="button"
            className="update_btn"
            onClick={() => handleUpdate(currentTodo.id)}
          >
            <Check />
          </Fab>
        </div>
      </Fade>
    </Modal>
  );
}

export default EditModal;
