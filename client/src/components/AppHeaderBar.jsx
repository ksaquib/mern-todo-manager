import React, { Component } from "react";
//Material Import
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

export class AppHeaderBar extends Component {
  render() {
    return (
      <AppBar position="static" className="app_header" elevation={0}>
        <Toolbar className="app_toolbar">
          <Typography variant="h6" className="header_title">
            TODO
          </Typography>
          <Button color="inherit" className="app_logout_button">
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    );
  }
}

export default AppHeaderBar;
