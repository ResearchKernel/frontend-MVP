import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  height: 64px;
  background: #fff;
  box-shadow: 0 1px 6px rgba(57, 73, 76, 0.35);
`;

const NavbarLinks = styled.div`
  display: inherit;
`;

const NavbarLogo = styled.div`
  width: 180px;
  height: 100%;
  line-height: 64px;
  font-size: 18px;
  text-align: center;
  cursor: pointer;
`;

const StyledLink = styled(Link)`
  height: 100%;
  line-height: 64px;
  margin-left: 1rem;
  margin-right: 1rem;
  cursor: pointer;
  color: #666;
  &:hover,
  &:active,
  &:focus {
    color: #37a000;
    text-decoration: none;
  }
`;

const NavbarComponent = () => {
  return (
    <Navbar>
      <NavbarLogo>
        <StyledLink as={Link} to="/">
          ResearchKernel
        </StyledLink>
      </NavbarLogo>
      <NavbarLinks>
        <StyledLink as={Link} to="/community">
          Community
        </StyledLink>
        <StyledLink as={Link} to="/about-us">
          About Us
        </StyledLink>
        <StyledLink as={Link} to="/contact-us">
          Contact Us
        </StyledLink>
        <StyledLink as={Link} to="/donate">
          Donate
        </StyledLink>
        <StyledLink as={Link} to="/sign-in">
          Sign In
        </StyledLink>
        <StyledLink as={Link} to="/sign-up">
          Sign Up
        </StyledLink>
      </NavbarLinks>
    </Navbar>
  );
};

export default NavbarComponent;
