import React from "react";
import { SubNavMenu, MenuItem } from "./sub_navbar.style";

class SubNavbarComponent extends React.Component {
  state = {
    current: "physics"
  };

  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };

  render() {
    return (
      <SubNavMenu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <MenuItem key="physics">Physics</MenuItem>

        <MenuItem key="astro-physics">Astro Physics</MenuItem>

        <MenuItem key="computer-science">Computer Science</MenuItem>

        <MenuItem key="mathematics">Mathematics</MenuItem>

        <MenuItem key="quantum-mechanics">Quantum Mechanics</MenuItem>

        <MenuItem key="chemistry">Chemistry</MenuItem>

        <MenuItem key="algorithms">Algorithms</MenuItem>

        <MenuItem key="1physics">Physics</MenuItem>

        <MenuItem key="1astro-physics">Astro Physics</MenuItem>

        <MenuItem key="1computer-science">Computer Science</MenuItem>

        <MenuItem key="1mathematics">Mathematics</MenuItem>

        <MenuItem key="1quantum-mechanics">Quantum Mechanics</MenuItem>

        <MenuItem key="1chemistry">Chemistry</MenuItem>

        <MenuItem key="1algorithms">Algorithms</MenuItem>
      </SubNavMenu>
    );
  }
}

export default SubNavbarComponent;
