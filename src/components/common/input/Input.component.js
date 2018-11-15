import React, { Component } from "react";
import PropTypes from "prop-types";
import { InputWrapper, Input, Label } from "./input.style";

class InputComponent extends Component {
  render() {
    const {
      className,
      onBlur,
      onChange,
      type,
      label
      //   labelPosition
    } = this.props;
    return (
      <InputWrapper>
        <Label>{label}</Label>
        <Input
          autoComplete="off"
          className={className}
          type={type}
          label={label}
          onBlur={onBlur}
          onChange={onChange}
        />
      </InputWrapper>
    );
  }
}

InputComponent.propTypes = {
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  type: PropTypes.string,
  label: PropTypes.string,
  labelPosition: PropTypes.oneOf(["left", "top"]),
  className: PropTypes.string
};

InputComponent.defaultProps = {
  type: "text",
  placeholder: "Enter Placeholder",
  label: "Label",
  labelPosition: "top",
  className: "rk-input"
};

export default InputComponent;
