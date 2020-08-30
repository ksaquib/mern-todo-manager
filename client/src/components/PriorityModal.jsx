import React from "react";

import Radio from "@material-ui/core/Radio";
import { FormControlLabel, Modal } from "@material-ui/core";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Cancel from "@material-ui/icons/Cancel";
import Check from "@material-ui/icons/Check";
import { green } from "@material-ui/core/colors";
import Fab from "@material-ui/core/Fab";
import { red, orange, yellow, blueGrey } from "@material-ui/core/colors";

export default function PriorityModal({
  handlePriorityChange,
  priorityModal,
  handleClose,
  selectedValue,
}) {
  return (
    <Modal
      open={priorityModal}
      onClose={handleClose}
      className="priority_modal"
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={priorityModal}>
        <div className="priority_box">
          <FormControlLabel
            value="end"
            control={
              <Radio
                checked={selectedValue === "1"}
                onChange={(e) => handlePriorityChange(e)}
                value="1"
                name="radio-button-demo"
                inputProps={{ "aria-label": "A" }}
                style={{ color: red[500] }}
              />
            }
            label="Priority 1"
          />
          <FormControlLabel
            value="end"
            control={
              <Radio
                checked={selectedValue === "2"}
                onChange={(e) => handlePriorityChange(e)}
                value="2"
                name="radio-button-demo"
                inputProps={{ "aria-label": "B" }}
                style={{ color: orange[500] }}
              />
            }
            label="Priority 2"
          />

          <FormControlLabel
            value="end"
            control={
              <Radio
                checked={selectedValue === "3"}
                onChange={(e) => handlePriorityChange(e)}
                value="3"
                name="radio-button-demo"
                inputProps={{ "aria-label": "C" }}
                style={{ color: yellow[500] }}
              />
            }
            label="Priority 3"
          />
          <FormControlLabel
            value="end"
            control={
              <Radio
                checked={selectedValue === "4"}
                onChange={(e) => handlePriorityChange(e)}
                value="4"
                color="default"
                name="radio-button-demo"
                inputProps={{ "aria-label": "D" }}
                style={{ color: blueGrey[500] }}
              />
            }
            label="Priority 4"
          />
          <div className="priority_actions">
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
              onClick={handleClose}
            >
              <Check />
            </Fab>
          </div>
        </div>
      </Fade>
    </Modal>
  );
}
