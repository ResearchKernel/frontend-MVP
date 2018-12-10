import React, { Component } from "react";
import { login } from "./../../_actions/auth.action";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Form, Icon, Input } from 'antd';
import {
  StyledForm,
  LoginButton,
  LoginPage,
  LoginHeader,
  RegisterLink
} from "./login.style";

const FormItem = Form.Item;

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
      <LoginPage>
        <StyledForm onSubmit={this.handleSubmit} autoComplete="false">
          <LoginHeader>Sign-In</LoginHeader>
          <FormItem>    
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Enter Username"
              onChange={this.handleUsername}
              />
          </FormItem>
          <FormItem>
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Enter Password"
              onChange={this.handlePassword}
              />
          </FormItem>
          <FormItem>
            <LoginButton type="primary" htmlType="submit">
              Sign In
            </LoginButton>
            <RegisterLink as={Link} to="/sign-up">
              New to ResearchKernel? Register now!
            </RegisterLink>
          </FormItem>
        </StyledForm>
      </LoginPage>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps)(Login);
