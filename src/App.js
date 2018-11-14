import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { isLoggedIn } from "./_actions/auth.action";
import Login from "./views/login/Login";
import Home from "./views/home/Home";

class App extends Component {
  render() {
    console.log(isLoggedIn());
    return (
      <div className="app">
        <Switch>
          <Route
            exact
            path="/"
            render={routerProps => {
              return <Home {...routerProps} />;
            }}
          />
          <Route
            exact
            path="/login"
            render={routerProps => {
              return isLoggedIn() ? (
                <Redirect to="/" />
              ) : (
                <Login {...routerProps} />
              );
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
