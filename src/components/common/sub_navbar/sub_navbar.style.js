import { Link } from "react-router-dom";
import { Menu } from "antd";
import styled from "styled-components";
const menuItem = Menu.Item;

export const SubNavbarLinks = styled.div`
  padding: 0 1.5625rem;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  height: 32px;
  background: #fff;
  box-shadow: 0 4px -2px rgba(57, 73, 76, 0.35);
`;

export const StyledLink = styled(Link)`
  cursor: pointer;
  color: #666;
  padding: 0.35rem 0.5rem;
  &:hover {
    background-color: #fafafa;
    color: #007bff;
    text-decoration: none;
  }
`;

export const MenuItem = styled(menuItem)`
  font-weight: 200;
  font-size: 12px;
  padding: 0 1rem;
`;

export const SubNavMenu = styled(Menu)`
  line-height: 28px;
`;
