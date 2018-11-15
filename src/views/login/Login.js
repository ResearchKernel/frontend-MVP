import React, { Component } from "react";
import { login } from "./../../_actions/auth.action";
import { connect } from "react-redux";
import Input from "../../components/common/input/Input.component";

class Login extends Component {
  state = { username: "", password: "" };

  setValue = (type, value) => {
    this.setState({ [type]: value }, () => {
      console.log(this.state.username);
    });
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
      <form autoComplete="false">
        <Input
          type="text"
          placeholder="Enter Username"
          label="Username"
          onBlur={this.handleUsername}
        />
        <Input
          type="password"
          placeholder="Enter Password"
          label="Password"
          onBlur={this.handlePassword}
        />
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps)(Login);
