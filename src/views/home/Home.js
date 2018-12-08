import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchGithubSearch } from "../../_actions/github.action"
import { Skeleton, Switch, List, Avatar, Icon, Form, Button, Drawer } from "antd";
import GithubComponent from "../../components/common/github/github.component";

const IconText = ({ type, text}) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

class HomeComponent extends Component {
  state = {
    // loading: true,
    isData: false,
    visible: false
  };

  // onChange = checked => {
  //   this.setState({ loading: !checked });
  // };

  handleGithub = (title) => {
    this.props.fetchGithubSearch(title);
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };

  componentWillReceiveProps(nextProps) {
    // if(this.props.cardData !== nextProps.cardData) {
    //   this.setState({ isData: true });
    // }
    if(this.props.arxivData !== nextProps.cardData) {
      this.setState({ isData: true });
    }
  }

  render() {
    const { loading, overflow, visible, isData } = this.state;
    const authors = [];
    return (
      <div style={{ background: "#fff", padding: "2rem", overflow }}>
        {isData ? <div>
        {/* <Switch checked={!loading} onChange={this.onChange} /> */}
        <List
          itemLayout="vertical"
          size="large"
          dataSource={this.props.arxivData.data}
          renderItem={(item,key) => (
            <List.Item
              key={key}
              actions={
                !loading && [
                  <IconText type="star-o" text="156" />,
                  <IconText type="like-o" text="156" />,
                  <span>
                    <Icon type="file-pdf" style={{ marginRight: 8 }} />
                    <a href={item.id[0].replace("abs", "pdf")} target="_blank">PDF</a>
                  </span>,
                  <span>
                    <Icon onClick={() => this.handleGithub(item.title)} type="github" style={{ marginRight: 8 }} />
                  </span>,
                ]
              }
            >
              <Skeleton loading={false} active avatar>
                <List.Item.Meta
                  title={<a href={item.id} target="_blank">{item.title}</a>}
                  description={item.author.map((authorName, key) => {
                    return (authors[key] = authorName.name[0] + ' ')
                  })}
                />
                {item.summary}
              </Skeleton>
            </List.Item>
          )}
        />
          </div> : null
        }
        <Drawer
          width={640}
          title="Github"
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <GithubComponent />
        </Drawer>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cardData: state.cardReducer,
    arxivData: state.arxivReducer
  }
};

const mapDispatchToProps = dispatch => ({
  fetchGithubSearch: (title) => dispatch(fetchGithubSearch(title))
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
