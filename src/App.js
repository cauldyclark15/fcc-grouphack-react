import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Login from "./Login";
import Content from "./Content";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact component={Content} path="/" />
        <Route component={Login} path="/login" />
      </Switch>
    );
  }
}

export default App;
