/**
 * title: 加载更多
 * desc: 可通过 `loadMore` 属性实现加载更多功能。
 */

import React from 'react';
import { List, Avatar, Button } from 'antd';
import '../style/index.less';

export default function Demo() {
  const list = [
    {
      title: 'Ant Design Title 1'
    },
    {
      title: 'Ant Design Title 2'
    },
    {
      title: 'Ant Design Title 3'
    },
    {
      title: 'Ant Design Title 4'
    }
  ];
  return (
    <List
      className="demo-loadmore-list"
      itemLayout="horizontal"
      // loadMore={loadMore}
      dataSource={list}
      renderItem={item => (
        <List.Item
          actions={[
            <Button key="1" shape="round">
              按钮
            </Button>,
            <Button key="1" type="primary" shape="round">
              按钮
            </Button>
          ]}
        >
          <List.Item.Meta
            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
            title={<a href="https://ant.design">{item.title}</a>}
            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
          />
        </List.Item>
      )}
    />
  );
}
