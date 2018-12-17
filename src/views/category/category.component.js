import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";
import { fetchGithubSearch } from "../../_actions/github.action"
import { fetchArxivData } from "../../_actions/arxiv.action";
import { Skeleton, List, Icon, Drawer, Pagination } from "antd";
import GithubComponent from "../../components/common/github/github.component";

class CategoryComponent extends Component {
  state = {
    loading: false,
    isData: false,
    visible: false
  };

  handleGithub = (title) => {
    this.props.fetchGithubSearch(title);
    this.setState({
      visible: true
    });
  };

  handlePagination = (current, pageSize) => {
    const category = this.props.match.params.Category;
    const start = (current-1)*pageSize;
    this.props.fetchArxivData('cat', category, start, pageSize);
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };

  componentWillReceiveProps(nextProps) {
    if(this.props.arxivData !== nextProps.arxivData) {
      this.setState({ isData: true });
    }
  }

  render() {
    const { loading, overflow, isData, visible } = this.state;
    const authors = [];
    return (
      <div style={{ background: "#fff", padding: "2rem", overflow }}>
        {isData ? <div>
        <List
          itemLayout="vertical"
          size="large"
          dataSource={this.props.arxivData.data}
          renderItem={(item,key) => (
            <List.Item
              key={key}
              actions={
                !loading && [
                  <span>{moment(item.published[0]).format('MMMM Do YYYY')}</span>,
                  <span>
                    <Icon type="file-pdf" style={{ marginRight: 8 }} />
                    <a href={item.id[0].replace("abs", "pdf")} target="_blank" rel="noopener noreferrer">PDF</a>
                  </span>,
                  <span>
                    <Icon onClick={() => this.handleGithub(item.title)} type="github" style={{ marginRight: 8 }} />
                  </span>,
                ]
              }
            >
              <Skeleton loading={false} active avatar>
                <List.Item.Meta
                  title={<a href={item.id} target="_blank" rel="noopener noreferrer">{item.title}</a>}
                  description={item.author.map((authorName, key) => {
                    return (authors[key] = authorName.name[0] + ' ')
                  })}
                />
                {item.summary}
              </Skeleton>
            </List.Item>
          )}
        />
        <Pagination showSizeChanger onChange={this.handlePagination} defaultCurrent={1} total={1000} />,
        </div> : <Skeleton active paragraph={{ rows: 10 }} />
        }
        <Drawer
          width={640}
          title="Github"
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={visible}
        >
          <GithubComponent />
        </Drawer>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    arxivData: state.arxivReducer
  }
};

const mapDispatchToProps = dispatch => ({
  fetchGithubSearch: (title) => dispatch(fetchGithubSearch(title)),
  fetchArxivData: (prefix, query, start, maxResults) => dispatch(fetchArxivData(prefix, query, start, maxResults))
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoryComponent);
