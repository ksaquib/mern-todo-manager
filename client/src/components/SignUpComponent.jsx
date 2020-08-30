import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import Container from "@material-ui/core/Container";
import "../App.css";
import { orange } from "@material-ui/core/colors";
import { Link } from "react-router-dom";

export class SignUpComponent extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
  };
  render() {
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className="sign_in_container">
          <Avatar
            className="sign_in_icon"
            style={{ color: "white", backgroundColor: orange[500] }}
          >
            <AccountBoxIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form className="sign_in_form" onSubmit={this.handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className="sign_in_submit"
            >
              Sign Up
            </Button>
            <Grid container className="sign_up_login">
              <Grid item>
                <Link to="/signin" variant="body2">
                  {"Already have a account? Sign In"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }
}

export default SignUpComponent;
