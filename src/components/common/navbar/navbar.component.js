import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarLinks,
  StyledLink,
  NavbarLogo,
  NavbarImg
} from "./navbar.style";
import SearchBox from "./../search_box/search_box.component";
import Logo from "../../../_assets/images/rk-light.png";
import { Row, Col,Popover, Icon, Button } from 'antd';

const content = (
  <div>
 <NavbarLinks>
 <p><StyledLink as={Link} to="/community">
 Community
 </StyledLink></p>
 <p><StyledLink  as={Link} to="/about-us">
 About-Us
</StyledLink></p>
<p><StyledLink as={Link} to="/contact-us">
 Contact-Us
</StyledLink></p>
<p><StyledLink as={Link} to="/donate">
 Donate
</StyledLink></p>
<p><StyledLink as={Link} to="/sign-in">
 Sign In
</StyledLink></p>
<p><StyledLink as={Link} to="/sign-up">
 Sign Up
</StyledLink></p>
</NavbarLinks>
</div>
 );

const NavbarComponent = () => {
  return (
    <div>
    <Row type="flex" justify="space-around" align="middle">
    <Col xs={22} sm={22} md={5} lg={3}>
      <NavbarLogo>
        <NavbarImg src={Logo} />
      </NavbarLogo>
    </Col>
    <Col xs={2} sm={2} md={0} lg={0}>
    <Popover
      content={content}
      placement="bottomRight" 
      trigger="click">
      <Button><Icon type= 'menu' /></Button>
    </Popover>
    </Col>
    <Col xs={0} sm={0} md={18} lg={12}>
      <NavbarLinks>
          <StyledLink as={Link} to="/community">
          Community
          </StyledLink>
        <StyledLink  as={Link} to="/about-us">
          About-Us
        </StyledLink>
        <StyledLink as={Link} to="/contact-us">
          Contact-Us
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
    </Col>
    <Col  xs={20} sm={16} md={8} lg={6}>
    <SearchBox />
    </Col>
    
    </Row>
    </div>
  );
};

export default NavbarComponent;
