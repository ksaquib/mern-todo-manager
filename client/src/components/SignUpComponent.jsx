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
import Alert from "@material-ui/lab/Alert";

import { orange } from "@material-ui/core/colors";
import { Link, withRouter } from "react-router-dom";
import { register } from "../redux/actions";
import { clearErrors } from "../redux/actions/errorActions";
import { connect } from "react-redux";

class SignUpComponent extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    msg: null,
  };
  componentDidMount() {
    if (localStorage.getItem("token")) {
      this.props.history.push("home");
    }
  }

  componentDidUpdate(prevProps) {
    const { error, isAuthenticated } = this.props;
    if (error !== prevProps.error) {
      //Check for register error
      if (error.id === "REGISTER_FAIL") {
        this.setState({ msg: error.msg.msg });
      } else {
        this.setState({ msg: null });
      }
    }

    //IF authenticated
    if (isAuthenticated) {
      //Clear Errors
      console.log(this.props);
      this.props.clearErrors();
      this.props.history.push("/home");
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = this.state;

    //Create new user
    const newUser = {
      name,
      email,
      password,
    };
    console.log(newUser);
    //Attempt to register
    this.props.register(newUser);
  };
  onChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };
  render() {
    const { msg: error } = this.state;
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
            {error && <Alert severity="error">{error}</Alert>}
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Username"
              name="name"
              autoComplete="name"
              autoFocus
              onChange={this.onChange}
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
              onChange={this.onChange}
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
              onChange={this.onChange}
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

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
});

export default connect(mapStateToProps, { register, clearErrors })(
  withRouter(SignUpComponent)
);
