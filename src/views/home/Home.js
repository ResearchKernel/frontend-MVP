import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchGithubSearch } from "../../_actions/github.action"
import { Skeleton, Switch, List, Icon, Button } from "antd";

const IconText = ({ type, text}) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

class HomeComponent extends Component {
  state = {
    loading: true,
    isData: false
  };

  onChange = checked => {
    this.setState({ loading: !checked });
  };

  handleGithub = (title) => {
    this.props.fetchGithubSearch(title);
  };

  componentWillReceiveProps(nextProps) {
    if(this.props.cardData !== nextProps.cardData) {
      this.setState({ isData: true });
    }
  }

  render() {
    const { loading, overflow } = this.state;
    return (
      <div style={{ background: "#fff", padding: "2rem", overflow }}>
        {this.state.isData ? <div>
        <Switch checked={!loading} onChange={this.onChange} />

        <List
          itemLayout="vertical"
          size="large"
          dataSource={this.props.cardData.data}
          renderItem={item => (
            <List.Item
              key={item.arxiv_id}
              actions={
                !loading && [
                  <IconText type="star-o" text="156" />,
                  <IconText type="like-o" text="156" />,
                  <span>
                    <Icon type="file-pdf" style={{ marginRight: 8 }} />
                    <a href={item.pdf_link}>PDF</a>
                  </span>,
                  <span>
                    <Button
                      shape="circle"
                      icon="github"
                      style={{ marginRight: 8 }}
                      onClick={() => this.handleGithub(item.title)}
                    />
                  </span>,
                ]
              }
            >
              <Skeleton loading={loading} active avatar>
                <List.Item.Meta
                  title={<a href={item.abs_page_link}>{item.title}</a>}
                  description={item.authors}
                />
                {item.abstract}
              </Skeleton>
            </List.Item>
          )}
        />
          </div> : null
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { cardData: state.cardReducer }
};

const mapDispatchToProps = dispatch => ({
  fetchGithubSearch: (title) => dispatch(fetchGithubSearch(title))
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
