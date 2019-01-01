
import React, { Component } from "react";
import { List, Skeleton } from "antd";

const listData = [];

for (let i = 0; i < 10; i++) {
  listData.push(i);
}

class SkeletonComponent extends Component {
  render() {
    return (
      <div>
        <List
          itemLayout="vertical"
          size="large"
          dataSource={listData}
          renderItem={() => (
            <List.Item>
              <Skeleton loading={true} active />
            </List.Item>
          )}
        />
      </div>
    );
  }
}

export default SkeletonComponent;
