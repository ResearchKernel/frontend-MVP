import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Menu, Layout } from "antd";
import { menuItemStyle } from "./sidebar.style";
import { fetchArxivData } from "../../../_actions/arxiv.action";
import category from "../../../_assets/category"

const Sider = Layout.Sider;

class SiderComponent extends React.Component {
  handleClick = e => {
    this.props.fetchArxivData('cat', e.key, '0', '10');
  };

  render() {
    return (
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        style={{ background: "#fff", overflow:'auto' }}
        theme="dark"
        width={250}
      >
        <Menu
          style={{ background: "#fff" }}
          onClick={this.handleClick}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          theme="default"
          mode="inline"
        >
          {
            category.map((item) => {
              if(item.type === this.props.subCategory) {
                return(
                item.sub.map((sub) => {
                  return (
                    <Menu.Item style={menuItemStyle} key={sub.code}>
                      <Link to={`/${sub.code}`}>
                        {sub.name}
                      </Link>
                    </Menu.Item>
                  )
                }))
              }
            })
          }
        </Menu>
      </Sider>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    subCategory: state.subCategory.data.subCategory,
  }
};

const mapDispatchToProps = dispatch => ({
  fetchArxivData: (prefix, query, start, maxResults) => dispatch(fetchArxivData(prefix, query, start, maxResults))
})

export default connect(mapStateToProps, mapDispatchToProps)(SiderComponent);