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
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Alert from "@material-ui/lab/Alert";
import { login } from "../redux/actions";
import { clearErrors } from "../redux/actions/errorActions";

class SignInComponent extends Component {
  state = {
    email: "",
    password: "",
    msg: null,
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    //Attempt to login
    this.props.login({ email, password });
  };
  componentDidMount() {}
  componentDidUpdate(prevProps) {
    const { error, isAuthenticated } = this.props;
    if (error !== prevProps.error) {
      //Check for register error
      if (error.id === "LOGIN_FAIL") {
        this.setState({ msg: error.msg.msg });
      } else {
        this.setState({ msg: null });
      }
    }

    if (isAuthenticated) {
      //Clear Errors
      this.props.clearErrors();
      this.props.history.push("/home");
    }
  }
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
            style={{ color: "white", backgroundColor: green[500] }}
          >
            <VpnKeyIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className="sign_in_form" onSubmit={this.handleSubmit}>
            {error && <Alert severity="error">{error}</Alert>}
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
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
});

export default connect(mapStateToProps, { login, clearErrors })(
  withRouter(SignInComponent)
);
