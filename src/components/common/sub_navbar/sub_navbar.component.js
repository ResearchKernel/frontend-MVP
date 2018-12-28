import React from "react";
import { connect } from "react-redux";
import { SubNavMenu, MenuItem } from "./sub_navbar.style";
import category from "../../../_assets/category";
import { fetchSubCategory } from "../../../_actions/subNavBar.action";

class SubNavbarComponent extends React.Component {
  state = {
    current: ""
  };

  handleClick = e => {
    this.setState({
      current: e.key
    });
    const firstCat = category.filter(
      item => item.code === e.item.props.code
    )[0]["sub"][0]["code"];
    this.props.history.push(`/category/${firstCat}`);
  };

  handleSubCategory = e => {
    const payload = e.item.props.code;
    this.props.fetchSubCategory(payload);
  };

  render() {
    return (
      <SubNavMenu
        onClick={this.handleClick}
        onSelect={this.handleSubCategory}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        {category.map((item, key) => (
          <MenuItem key={key} code={item.code}>
            {item.type}
          </MenuItem>
        ))}
      </SubNavMenu>
    );
  }
}

const mapStateToProps = state => {
  return {
    subCategory: state.subCategory
  };
};

const mapDispatchToProps = dispatch => ({
  fetchSubCategory: payload => dispatch(fetchSubCategory(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubNavbarComponent);
