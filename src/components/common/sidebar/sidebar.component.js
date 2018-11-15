import React from "react";
import { Menu, Layout } from "antd";
import { menuItemStyle } from "./sidebar.style";
const Sider = Layout.Sider;

class SiderComponent extends React.Component {
  handleClick = e => {
    console.log("click ", e);
  };

  render() {
    return (
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        style={{ background: "#fff" }}
        theme="dark"
        width={200}
        onBreakpoint={broken => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <Menu
          style={{ background: "#fff" }}
          onClick={this.handleClick}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          theme="default"
          mode="inline"
        >
          <Menu.Item style={menuItemStyle} key="1">
            Option 1
          </Menu.Item>
          <Menu.Item style={menuItemStyle} key="2">
            Option 2
          </Menu.Item>
          <Menu.Item style={menuItemStyle} key="3">
            Option 3
          </Menu.Item>
          <Menu.Item style={menuItemStyle} key="4">
            Option 4
          </Menu.Item>
          <Menu.Item style={menuItemStyle} key="5">
            Option 5
          </Menu.Item>
          <Menu.Item style={menuItemStyle} key="6">
            Option 6
          </Menu.Item>
          <Menu.Item style={menuItemStyle} key="7">
            Option 7
          </Menu.Item>
          <Menu.Item style={menuItemStyle} key="8">
            Option 8
          </Menu.Item>
          <Menu.Item style={menuItemStyle} key="9">
            Option 9
          </Menu.Item>
          <Menu.Item style={menuItemStyle} key="10">
            Option 10
          </Menu.Item>
          <Menu.Item style={menuItemStyle} key="11">
            Option 11
          </Menu.Item>
          <Menu.Item style={menuItemStyle} key="12">
            Option 12
          </Menu.Item>
          <Menu.Item style={menuItemStyle} key="13">
            Option 13
          </Menu.Item>
          <Menu.Item style={menuItemStyle} key="14">
            Option 14
          </Menu.Item>
          <Menu.Item style={menuItemStyle} key="15">
            Option 15
          </Menu.Item>
          <Menu.Item style={menuItemStyle} key="16">
            Option 16
          </Menu.Item>
          <Menu.Item style={menuItemStyle} key="17">
            Option 17
          </Menu.Item>
          <Menu.Item style={menuItemStyle} key="18">
            Option 18
          </Menu.Item>
          <Menu.Item style={menuItemStyle} key="19">
            Option 19
          </Menu.Item>
          <Menu.Item style={menuItemStyle} key="20">
            Option 20
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}
export default SiderComponent;
