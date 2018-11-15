import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarLinks,
  StyledLink,
  NavbarLogo,
  NavbarImg
} from "./navbar.style";
import Logo from "../../../_assets/images/rk-light.png";

const NavbarComponent = () => {
  return (
    <Navbar>
      <NavbarLogo>
        {/* <StyledLink as={Link} to="/"> */}
        <NavbarImg src={Logo} />
        {/* </StyledLink> */}
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
