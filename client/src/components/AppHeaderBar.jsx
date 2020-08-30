import React, { Component } from "react";
//Material Import
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router-dom";

export class AppHeaderBar extends Component {
  handleClick = () => {
    this.props.logout();
    this.props.history.push("/signin");
  };
  render() {
    return (
      <AppBar position="static" className="app_header" elevation={0}>
        <Toolbar className="app_toolbar">
          <Typography variant="h6" className="header_title">
            TODO
          </Typography>
          <Button
            color="inherit"
            className="app_logout_button"
            onClick={this.handleClick}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withRouter(AppHeaderBar);
