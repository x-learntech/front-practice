/**
 * title: 基本
 * desc: 简单的展示。
 */

import React from 'react';
import { List, Avatar } from '@xx-desktop-web-core/atoms';

const listData = [];
for (let i = 0; i < 23; i += 1) {
  listData.push({
    href: 'http://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
  });
}

const IconText = ({ type, text }) => (
  <span>
    {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
    {/* <Icon type={type} style={{ marginRight: 8 }} /> */}
    {text}
  </span>
);

export default function Demo() {
  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: page => {
          console.log(page);
        },
        pageSize: 3
      }}
      dataSource={listData}
      footer={
        <div>
          <b>ant design</b> footer part
        </div>
      }
      renderItem={item => (
        <List.Item
          // eslint-disable-next-line
          key={item.title}
          actions={[
            <IconText type="star-o" text="156" key="list-vertical-star-o" />,
            <IconText type="like-o" text="156" key="list-vertical-like-o" />,
            <IconText type="message" text="2" key="list-vertical-message" />
          ]}
          extra={
            <img width={272} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />
          }
        >
          <List.Item.Meta
            // eslint-disable-next-line
            avatar={<Avatar src={item.avatar} />}
            // eslint-disable-next-line
            title={<a href={item.href}>{item.title}</a>}
            // eslint-disable-next-line
            description={item.description}
          />
          {/* eslint-disable-next-line */}
          {item.content}
        </List.Item>
      )}
    />
  );
}
