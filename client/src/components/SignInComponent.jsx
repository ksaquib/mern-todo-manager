import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import Container from "@material-ui/core/Container";
import "../App.css";
import { green } from "@material-ui/core/colors";
import { Link } from "react-router-dom";

export class SignInComponent extends Component {
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
            style={{ color: "white", backgroundColor: green[500] }}
          >
            <VpnKeyIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className="sign_in_form" onSubmit={this.handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
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
              Sign In
            </Button>
            <Grid container className="sign_in_register">
              <Grid item>
                <Link to="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }
}

export default SignInComponent;
