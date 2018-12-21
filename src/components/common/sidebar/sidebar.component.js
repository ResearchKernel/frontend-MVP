import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Menu, Layout } from "antd";
import { menuItemStyle } from "./sidebar.style";
import { fetchArxivData } from "../../../_actions/arxiv.action";
import { fetchSubCategory } from "../../../_actions/subNavBar.action";
import category from "../../../_assets/category"

const Sider = Layout.Sider;

class SiderComponent extends React.Component {
  state = {
    defaultSelectedKey: "0",
    selectedKeys: "0"
  }

  handleClick = e => {
    this.props.fetchArxivData('cat', e.item.props.code, '0', '10');
    this.setState({ selectedKeys: e.item.props.index.toString() });
  };

  componentDidMount() {
    const loc = this.props.location.pathname;
    if (loc === "/") {
      this.props.history.push("/category/astro-ph");
      this.setState({ selectedKeys: "0" });
      this.props.fetchArxivData('cat', "astro-ph.CO", '0', '10');
      this.props.fetchSubCategory("astro-ph");
    } else {
      const lastIndex = loc.lastIndexOf("/");
      if (lastIndex !== -1) {
        const catsub = loc.substr(lastIndex + 1);
        const cat = catsub.split(".")[0];
        const index = category.filter(item => item.code === cat)[0]["sub"].findIndex(subitem => subitem.code === catsub);
        this.setState({ selectedKeys: index.toString() });
        this.props.fetchArxivData('cat', catsub, '0', '10');
        this.props.fetchSubCategory(catsub.split(".")[0]);
      }
    }
  }

  render() {
    const { defaultSelectedKey, selectedKeys } = this.state;
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
          defaultSelectedKeys={[defaultSelectedKey]}
          selectedKeys={[selectedKeys]}
          theme="default"
          mode="inline"
        >
          {
            category
            .filter(item => item.code === this.props.subCategory)
            .map(item => {
              return(
                item.sub.map((sub, index) => {
                  return (
                    <Menu.Item style={menuItemStyle} key={index} code={sub.code}>
                      <Link to={`/category/${sub.code}`}>
                        {sub.name}
                      </Link>
                    </Menu.Item>
                  )
                })
              )
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
  fetchArxivData: (prefix, query, start, maxResults) => dispatch(fetchArxivData(prefix, query, start, maxResults)),
  fetchSubCategory: (payload) => dispatch(fetchSubCategory(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(SiderComponent);