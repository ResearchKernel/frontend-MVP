import React from "react";
import { connect } from "react-redux";
import { fetchArxivData } from "../../../_actions/arxiv.action";
import { Icon, Button, Input, AutoComplete } from "antd";

const Search = Input.Search;

// const Option = AutoComplete.Option;

// function onSelect(value) {
//   console.log("onSelect", value);
// }

// function getRandomInt(max, min = 0) {
//   return Math.floor(Math.random() * (max - min + 1)) + min; // eslint-disable-line no-mixed-operators
// }

// function searchResult(query) {
//   return new Array(getRandomInt(5))
//     .join(".")
//     .split(".")
//     .map((item, idx) => ({
//       query,
//       category: `${query}${idx}`,
//       count: getRandomInt(200, 100)
//     }));
// }

// function renderOption(item) {
//   return (
//     <Option key={item.category} text={item.category}>
//       {item.query}
//       <a
//         href={`https://s.taobao.com/search?q=${item.query}`}
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         {item.category}
//       </a>
//       <span className="global-search-item-count">{item.count}</span>
//     </Option>
//   );
// }

class SearchBoxComponent extends React.Component {
  state = {
    dataSource: []
  };

  // handleSearch = value => {
  //   this.setState({
  //     dataSource: value ? searchResult(value) : []
  //   });
  // };

  handleSearch = value => {
    this.props.fetchArxivData('all', value, '0', '10');
  };

  render() {
    const { dataSource } = this.state;
    return (
      <div style={{ flex: 1 }}>
        <div className="global-search-wrapper" style={{ width: 400 }}>
          {/* <AutoComplete
            className="global-search"
            size="medium"
            style={{ width: "100%" }}
            dataSource={dataSource.map(renderOption)}
            onSelect={onSelect}
            onSearch={this.handleSearch}
            placeholder="input here"
            optionLabelProp="text"
          >
            <Input
              suffix={
                <Button className="search-btn" size="medium" type="primary">
                  <Icon type="search" />
                </Button>
              }
            />
          </AutoComplete> */}
        <Search 
           placeholder="input search text"
           enterButton
           onSearch={value => this.handleSearch(value)}
        />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchArxivData: (prefix, query, start, maxResults) => dispatch(fetchArxivData(prefix, query, start, maxResults))
})

export default connect(null, mapDispatchToProps)(SearchBoxComponent);
