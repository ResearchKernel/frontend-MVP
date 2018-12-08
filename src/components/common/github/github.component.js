import React, { Component } from "react";
import { connect } from "react-redux";
import { List, Icon } from "antd";

const IconText = ({ type, text}) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

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
          itemLayout="vertical"
          dataSource={data.items}
          renderItem={item => (
            <List.Item
              actions={[
                <IconText type="star-o" text={item.stargazers_count + ' Stars'} />,
                <IconText type="forks" text={item.forks_count + ' Forks'} />,
                <IconText type="eye" text={item.watchers_count + ' Watchers'} />,
                <IconText type="trophy" text={item.score + ' Score'} />,
              ]}
            >
              <List.Item.Meta
                title={<a href={item.svn_url} target="_blank">{item.name}</a>}
                description={item.owner.login}
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
