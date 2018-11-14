import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Sidebar = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  width: 200px;
  min-width: 200px;
  height: 100%;
  background: #fff;
  /* box-shadow: 0px 4px 6px rgba(57, 73, 76, 0.35); */
  border-right: 1px solid #ededed;
`;

const SidebarItem = styled(Link)`
  height: 32px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #666;
  border-bottom: 1px solid #ededed;
  &:hover,
  &:active,
  &:focus {
    color: #37a000;
    background: #f9f9f9;
    text-decoration: none;
  }
`;

const SidebarComponent = () => {
  return (
    <Sidebar>
      <SidebarItem as={Link} to="/">
        Item 1
      </SidebarItem>
      <SidebarItem as={Link} to="/">
        Item 2
      </SidebarItem>
      <SidebarItem as={Link} to="/">
        Item 3
      </SidebarItem>
      <SidebarItem as={Link} to="/">
        Item 4
      </SidebarItem>
      <SidebarItem as={Link} to="/">
        Item 5
      </SidebarItem>
      <SidebarItem as={Link} to="/">
        Item 6
      </SidebarItem>
      <SidebarItem as={Link} to="/">
        Item 7
      </SidebarItem>
      <SidebarItem as={Link} to="/">
        Item 8
      </SidebarItem>
      <SidebarItem as={Link} to="/">
        Item 9
      </SidebarItem>
      <SidebarItem as={Link} to="/">
        Item 10
      </SidebarItem>
    </Sidebar>
  );
};

export default SidebarComponent;
