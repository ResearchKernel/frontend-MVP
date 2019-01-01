import React, { Component } from "react";
import { connect } from "react-redux";
import { List, Icon, Skeleton } from "antd";
import SkeletonComponent from "../../../_assets/tempData";

const IconText = ({ type, text}) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

class GithubComponent extends Component {
  state = {
    isData: false,
    noRepo: false
  };    
  
  componentWillReceiveProps(nextProps) {
    if(this.props.githubData !== nextProps.githubData) {
      if(nextProps.githubData.data.items.length !== 0)
        this.setState({ isData: true });
      else{
        this.setState({ noRepo: true, isData: false });
      }
    }
  }

  render() {
    const data = this.props.githubData.data;
    const { isData, noRepo } = this.state;
    return (
      <div>
        { isData ?
        <List
          itemLayout="vertical"
          dataSource={data.items}
          renderItem={item => (
            <Skeleton loading={this.props.processing} active>
              <List.Item
                actions={[
                  <IconText type="star-o" text={item.stargazers_count + ' Stars'} />,
                  <IconText type="forks" text={item.forks_count + ' Forks'} />,
                  <IconText type="eye" text={item.watchers_count + ' Watchers'} />,
                  <IconText type="trophy" text={item.score + ' Score'} />,
                ]}
              >
                <List.Item.Meta
                  title={<a href={item.svn_url} target="_blank" rel="noopener noreferrer">{item.name}</a>}
                  description={item.owner.login}
                />
              </List.Item>
            </Skeleton>
          )}
        /> : noRepo && !this.props.processing ? <div>No Github repositories.</div> : <SkeletonComponent /> }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    githubData: state.githubReducer,
    processing: state.githubReducer.processing
  }
};

export default connect(mapStateToProps)(GithubComponent);
