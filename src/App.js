import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { isLoggedIn } from "./_actions/auth.action";
import styled from "styled-components";
import Login from "./views/login/Login";
import Home from "./views/home/Home";
import Navbar from "./components/common/navbar/Navbar";
import Sidebar from "./components/common/sidebar/Sidebar";

const App = styled.div`
  max-width: 1366px;
  width: 100%;
  height: 100%;
  background-color: #f2f2f2;
  color: #222;
`;

const Content = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  height: calc(100% - 64px);
`;

const MainView = styled.div`
  /* display: flex; */
  /* flex-flow: row nowrap; */
`;

class AppComponent extends Component {
  render() {
    return (
      <App>
        <Navbar />
        <Content>
          <Sidebar />
          <MainView>
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
                path="/sign-in"
                render={routerProps => {
                  return isLoggedIn() ? (
                    <Redirect to="/" />
                  ) : (
                    <Login {...routerProps} />
                  );
                }}
              />
            </Switch>
          </MainView>
        </Content>
      </App>
    );
  }
}

export default withRouter(AppComponent);
