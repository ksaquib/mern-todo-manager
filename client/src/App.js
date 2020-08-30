import React, { Component } from "react";

import { Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import SignIn from "./pages/signin";
import Signup from "./pages/signup";

export class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={Signup} />
        <Route path="/" component={Home} />
      </Switch>
    );
  }
}

export default App;
