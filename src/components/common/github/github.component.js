import React, { Component } from "react";
import { connect } from "react-redux";
import { List } from "antd";

class GithubComponent extends Component {
  state = {
    isData: false,
  };    
  
  componentWillReceiveProps(nextProps) {
    if(this.props.githubData !== nextProps.githubData) {
      this.setState({ isData: true });
    }
  }

  render() {
    const data = this.props.githubData.data;
    if(!this.state.isData && data.length === 0) {
      console.log("inside")
      return(<div>No Github repositories.</div>)
    }
    return (
      <div>
        { this.state.isData ?
        <List
          itemLayout="horizontal"
          dataSource={data.items}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                title={<a href={item.svn_url} target="_blank">{item.name}</a>}
              />
            </List.Item>
          )}
        /> : <span>Loading...</span> }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    githubData: state.githubReducer,
  }
};

export default connect(mapStateToProps)(GithubComponent);
