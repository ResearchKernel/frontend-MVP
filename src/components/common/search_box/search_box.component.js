import React from "react";
import { connect } from "react-redux";
import { fetchArxivData } from "../../../_actions/arxiv.action";
import { Input } from "antd";

const Search = Input.Search;

class SearchBoxComponent extends React.Component {
  state = {
    dataSource: []
  };

  handleSearch = value => {
    this.props.fetchArxivData(true, "all", value, "0", "10");
  };

  render() {
    return (
      <div style={{ flex: 1 }}>
        <div className="global-search-wrapper" style={{ width: 400 }}>
          <Search
            placeholder="Search"
            enterButton
            onSearch={value => this.handleSearch(value)}
          />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchArxivData: (search, prefix, query, start, maxResults) =>
    dispatch(fetchArxivData(search, prefix, query, start, maxResults))
});

export default connect(
  null,
  mapDispatchToProps
)(SearchBoxComponent);
