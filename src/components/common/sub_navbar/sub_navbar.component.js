import React from "react";
import { connect } from "react-redux";
import { List } from "antd";
import { SubNavMenu, MenuItem } from "./sub_navbar.style";
// import { fetchCategory } from "../../../_actions/subNavBar.action";
import category from "../../../_assets/category";
import SiderComponent from "../sidebar/sidebar.component";
import { fetchSubCategory } from "../../../_actions/subNavBar.action";
import { fetchArxivData } from "../../../_actions/arxiv.action"; 

class SubNavbarComponent extends React.Component {
  state = {
    current: ""
  };

  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };

  handleSubCategory = (e) => {
    const payload = e.item.props.children;
    this.props.fetchSubCategory(payload);
    this.props.fetchArxivData("electron");
  };

  render() {
    return (
      <SubNavMenu
        onClick={this.handleClick}
        onSelect={this.handleSubCategory}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
      {
        category.map((item,key) => <MenuItem key={key}>{item.type}</MenuItem>)
      }
      </SubNavMenu>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    subCategory: state.subCategory,
    arxivData: state.arxivReducer
  }
};

const mapDispatchToProps = dispatch => ({
  fetchSubCategory: (payload) => dispatch(fetchSubCategory(payload)),
  fetchArxivData: (query) => dispatch(fetchArxivData(query))
});

export default connect(mapStateToProps, mapDispatchToProps)(SubNavbarComponent);