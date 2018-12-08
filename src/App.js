import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { isLoggedIn } from "./_actions/auth.action";
import styled from "styled-components";
import Login from "./views/login/Login";
import Home from "./views/home/Home";
import Navbar from "./components/common/navbar/navbar.component";
import SubNavbar from "./components/common/sub_navbar/sub_navbar.component";
import Sidebar from "./components/common/sidebar/sidebar.component";
// import MainComponent from "./views/main/Main";

const App = styled.div`
  max-width: 1366px;
  width: 100%;
  height: 100%;
  background-color: #fff;
  color: #222;
`;

const Content = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  height: calc(100% - 96px);
  overflow: hidden;
`;

const MainView = styled.div`
  padding: 1rem;
  width: calc(100% - 200px);
  overflow-y: scroll;
`;

class AppComponent extends Component {
  render() {
    return (
      <App>
        <Navbar />
        <SubNavbar />
        <Content>
          <Sidebar />
          <MainView>
            <Switch>
              <Route
                exact
                path="/:Category"
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
