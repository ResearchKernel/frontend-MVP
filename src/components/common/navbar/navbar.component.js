import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarLinks,
  StyledLink,
  NavbarLogo,
  NavbarImg,
  CustomLink
} from "./navbar.style";
import SearchBox from "./../search_box/search_box.component";
import Logo from "../../../_assets/images/rk-light.png";

class NavbarComponent extends React.Component {
  redirectTo = url => {
    const win = window.open(url, "_blank");
    win.focus();
  };
  render() {
    return (
      <Navbar>
        <NavbarLogo>
          <StyledLink as={Link} to="/">
            <NavbarImg src={Logo} />
          </StyledLink>
        </NavbarLogo>
        <NavbarLinks>
          <CustomLink
            target="_blank"
            href="https://community.researchkernel.org"
          >
            Community
          </CustomLink>
          <StyledLink as={Link} to="/about-us">
            About Us
          </StyledLink>
          <StyledLink as={Link} to="/contact-us">
            Contact Us
          </StyledLink>
          <StyledLink as={Link} to="/donate">
            Donate
          </StyledLink>
          {/* <StyledLink as={Link} to="/sign-in">
          Sign In
        </StyledLink>
        <StyledLink as={Link} to="/sign-up">
          Sign Up
        </StyledLink> */}
        </NavbarLinks>
        <SearchBox />
      </Navbar>
    );
  }
}

export default NavbarComponent;
