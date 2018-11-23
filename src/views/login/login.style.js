import styled from "styled-components";
import { Form, Button } from 'antd';
import { Link } from "react-router-dom";

export const LoginPage = styled.div`
    margin-left: 35%;
    margin-right: 35%;
    margin-top: 5%;
`;

export const LoginHeader = styled.div`
    font-size: 35px;
    text-align: center;
    margin-bottom: 10px;
`;

export const StyledForm = styled(Form)`
    max-width: 300px;
`;

export const Forgot = styled.div`
    float: right;
`;

export const LoginButton = styled(Button)`
    width: 100%;
`;

export const RegisterLink = styled(Link)`
    cursor: pointer;
    color: #007bff;
    &:hover {
    background-color: #fafafa;
    text-decoration: none;
}
`;