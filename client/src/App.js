import React, { Component } from "react";

import { Route, Switch } from "react-router-dom";
import routeConfig from "./routerConfig";

export class App extends Component {
  render() {
    return (
      <Switch>
        {routeConfig.map(({ path, component: Component, isExact }, index) => (
          <Route
            key={index}
            {...(isExact ? { exact: true } : {})}
            path={path}
            component={Component}
          />
        ))}
      </Switch>
    );
  }
}

export default App;
