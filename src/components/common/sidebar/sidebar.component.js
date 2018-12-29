import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Menu, Layout, Tooltip } from "antd";
import { menuItemStyle } from "./sidebar.style";
import { fetchArxivData } from "../../../_actions/arxiv.action";
import { fetchSubCategory } from "../../../_actions/subNavBar.action";
import category from "../../../_assets/category";

const Sider = Layout.Sider;

class SiderComponent extends React.Component {
  state = {
    defaultSelectedKey: "0",
    selectedKeys: "0"
  };

  handleClick = e => {
    this.props.history.push(`/category/${e.item.props.code}`);
    this.props.fetchArxivData(false, "cat", e.item.props.code, "0", "10");
    this.setState({ selectedKeys: e.item.props.index.toString() });
  };

  componentDidMount() {
    const links = ["community", "about-us", "contact-us", "donate"];
    console.log(this.props.location.pathname.split("/").pop());
    const TRUE = !links.includes(this.props.location.pathname.split("/").pop());
    if (TRUE) {
      this.updateHooks(this.props.location.pathname);
    }
  }

  updateHooks = loc => {
    if (loc === "/") {
      this.props.history.push("/category/astro-ph.CO");
      this.setState({ selectedKeys: "0" });
      this.props.fetchArxivData(false, "cat", "astro-ph.CO", "0", "10");
      this.props.fetchSubCategory("astro-ph");
    } else {
      const categoryUrl = loc.split("/").pop();
      const cat = categoryUrl.split(".")[0];
      const fIndex = category.filter(item => item.code === cat);
      const fSubIndex = fIndex[0]["sub"];
      const index = fSubIndex.findIndex(
        subitem => subitem.code === categoryUrl
      );
      this.setState({ selectedKeys: index.toString() });
      this.props.fetchArxivData(false, "cat", categoryUrl, "0", "10");
      this.props.fetchSubCategory(cat);
    }
  };

  componentWillReceiveProps(nextProps, nextState) {
    const links = ["community", "about-us", "contact-us", "donate"];
    if (
      nextProps.location.pathname !== this.props.location.pathname &&
      !links.includes(nextProps.location.pathname.split("/").pop())
    ) {
      this.updateHooks(nextProps.location.pathname);
    }
  }

  render() {
    const { defaultSelectedKey, selectedKeys } = this.state;
    const links = ["community", "about-us", "contact-us", "donate"];
    const hideSidebar = links.includes(
      this.props.location.pathname.split("/").pop()
    );
    return (
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        style={{
          background: "#fff",
          overflow: "auto",
          display: this.props.search || hideSidebar ? "none" : "block"
        }}
        theme="dark"
        width={250}
      >
        <Menu
          style={{ background: "#fff", height: "100%" }}
          onClick={this.handleClick}
          defaultSelectedKeys={[defaultSelectedKey]}
          selectedKeys={[selectedKeys]}
          theme="default"
          mode="inline"
        >
          {category
            .filter(item => item.code === this.props.subCategory)
            .map(item => {
              return item.sub.map((sub, index) => {
                return (
                  <Menu.Item style={menuItemStyle} key={index} code={sub.code}>
                    <Tooltip placement="right" title={sub.name}>
                      <Link
                        to={`/category/${sub.code}`}
                        style={{
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis"
                        }}
                      >
                        {sub.name}
                      </Link>
                    </Tooltip>
                  </Menu.Item>
                );
              });
            })}
        </Menu>
      </Sider>
    );
  }
}

const mapStateToProps = state => {
  return {
    subCategory: state.subCategory.data.subCategory,
    search: state.arxivReducer.search
  };
};

const mapDispatchToProps = dispatch => ({
  fetchArxivData: (search, prefix, query, start, maxResults) =>
    dispatch(fetchArxivData(search, prefix, query, start, maxResults)),
  fetchSubCategory: payload => dispatch(fetchSubCategory(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SiderComponent);
