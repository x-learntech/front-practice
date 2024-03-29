/**
 * title: 响应式的栅格列表
 * desc: 响应式的栅格列表。尺寸与 [Layout Grid](https://ant.design/components/grid-cn/#Col) 保持一致。
 */

import React from 'react';
import { List, Card } from '@xx-desktop-web-core/atoms';

const data = [
  {
    title: 'Title 1'
  },
  {
    title: 'Title 2'
  },
  {
    title: 'Title 3'
  },
  {
    title: 'Title 4'
  },
  {
    title: 'Title 5'
  },
  {
    title: 'Title 6'
  }
];

export default function Demo() {
  return (
    <List
      grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 4,
        lg: 4,
        xl: 6,
        xxl: 3
      }}
      dataSource={data}
      renderItem={item => (
        <List.Item>
          <Card title={item.title}>Card content</Card>
        </List.Item>
      )}
    />
  );
}
