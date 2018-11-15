import styled from "styled-components";

export const InputWrapper = styled.div``;

export const Input = styled.input`
  height: auto;
  padding: 0.4375rem 0.75rem;
  font-size: 0.8125rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  border: 1px solid #e1e5eb;
  font-weight: 400;
  will-change: border-color, box-shadow;
  border-radius: 0.25rem;
  box-shadow: none;
  transition: box-shadow 250ms cubic-bezier(0.27, 0.01, 0.38, 1.06),
    border 250ms cubic-bezier(0.27, 0.01, 0.38, 1.06);
  display: block;
  &:active,
  &:focus {
    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);
  }
`;

export const Label = styled.label`
  height: 21px;
  font-family: inherit;
  font-size: 12px;
  font-weight: 400;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: #333333;
`;
