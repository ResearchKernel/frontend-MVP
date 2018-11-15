import styled from "styled-components";
import { Link } from "react-router-dom";

export const Navbar = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  height: 64px;
  background: #fff;
  border-bottom: 1px solid #ededed;
`;

export const NavbarLinks = styled.div`
  display: inherit;
  @media (max-width: 992px) {
    display: none;
  }
`;

export const NavbarLogo = styled.div`
  width: 200px;
  height: 100%;
  line-height: 64px;
  font-size: 18px;
  text-align: center;
  cursor: pointer;
`;

export const StyledLink = styled(Link)`
  margin-right: 1rem;
  padding: 0.5rem;
  cursor: pointer;
  color: #666;
  &:hover {
    background-color: #fafafa;
    color: #007bff;
    text-decoration: none;
  }
`;

export const NavbarImg = styled.img`
  width: 100px;
`;
