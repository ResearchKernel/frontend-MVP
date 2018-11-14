import React, { Component } from "react";
import { login } from "./../../_actions/auth.action";
import { connect } from "react-redux";

class Login extends Component {
  state = { username: "", password: "" };

  setValue = (type, value) => {
    this.setState({ [type]: value });
  };

  handleUsername = e => {
    e.preventDefault();
    this.setValue("username", e.target.value);
  };

  handlePassword = e => {
    e.preventDefault();
    this.setValue("password", e.target.value);
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.dispatch(login(this.state)).then(() => {
      this.props.history.push("/");
    });
  };

  render() {
    return (
      <form>
        <label>Username</label>
        <input
          type="text"
          placeholder="Enter Username"
          onBlur={this.handleUsername}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter Password"
          onBlur={this.handlePassword}
        />
        <button type="submit" onClick={this.handleSubmit}>
          Sign In
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps)(Login);
