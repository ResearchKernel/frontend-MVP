import React, { Component } from "react";
import { connect } from "react-redux";
import { Skeleton, Switch, List, Avatar, Icon, Form, Button } from "antd";

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

  componentWillReceiveProps(nextProps) {
    // if(this.props.cardData !== nextProps.cardData) {
    //   this.setState({ isData: true });
    // }
    if(this.props.arxivData !== nextProps.cardData) {
      this.setState({ isData: true });
    }
  }

  render() {
    const { loading, overflow } = this.state;
    const authors = [];
    return (
      <div style={{ background: "#fff", padding: "2rem", overflow }}>
        {this.state.isData ? <div>
        <Switch checked={!loading} onChange={this.onChange} />

        <List
          itemLayout="vertical"
          size="large"
          dataSource={this.props.arxivData.data}
          renderItem={item => (
            <List.Item
              key={item.arxiv_id} // Needs to change
              actions={
                !loading && [
                  <IconText type="star-o" text="156" />,
                  <IconText type="like-o" text="156" />,
                  <span>
                    <Icon type="file-pdf" style={{ marginRight: 8 }} />
                    <a href={item.id[0].replace("abs", "pdf")} target="_blank">PDF</a>
                  </span>,
                ]
              }
            >
              <Skeleton loading={loading} active avatar>
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

export default connect(mapStateToProps)(HomeComponent);
