import React from "react";
import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

function AppNotification({ open, handleClose, children, status }) {
  //   const [state] = React.useState({
  //     vertical: "bottom",
  //     horizontal: "right",
  //   });
  //   const { vertical, horizontal } = state;
  return (
    <Snackbar
      open={open}
      autoHideDuration={500}
      onClose={handleClose}
      //   anchorOrigin={{ vertical, horizontal }}
      //   key={vertical + horizontal}
    >
      <MuiAlert
        elevation={6}
        variant="filled"
        onClose={handleClose}
        severity={status}
      >
        {children}
      </MuiAlert>
    </Snackbar>
  );
}

export default AppNotification;
