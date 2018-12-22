import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { isLoggedIn } from "./_actions/auth.action";
import { connect } from "react-redux";
import styled from "styled-components";
import Login from "./views/login/Login";
import Home from "./views/home/Home";
import Navbar from "./components/common/navbar/navbar.component";
import SubNavbar from "./components/common/sub_navbar/sub_navbar.component";
import Sidebar from "./components/common/sidebar/sidebar.component";
import Community from "./components/common/community/community.component";
import About from "./views/about/about";
import Contact from "./views/contact/contact";
import Donate from "./views/donate/donate";
import Category from "./views/category/category.component";

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
  width: ${props => (props.search ? "100%" : "calc(100% - 200px)")};
  overflow-y: scroll;
`;

class AppComponent extends Component {
  render() {
    return (
      <App>
        <Navbar />
        <SubNavbar />
        <Content>
          <Sidebar {...this.props} />
          <MainView search={this.props.search}>
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
                path="/category/:Category"
                render={routerProps => {
                  return <Category {...routerProps} />;
                }}
              />
              <Route
                exact
                path="/community"
                render={routerProps => {
                  return <Community {...routerProps} />;
                }}
              />
              <Route
                exact
                path="/about-us"
                render={routerProps => {
                  return <About {...routerProps} />;
                }}
              />
              <Route
                exact
                path="/contact-us"
                render={routerProps => {
                  return <Contact {...routerProps} />;
                }}
              />
              <Route
                exact
                path="/donate"
                render={routerProps => {
                  return <Donate {...routerProps} />;
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

const mapStateToProps = state => {
  return {
    search: state.arxivReducer.search
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(AppComponent)
);
