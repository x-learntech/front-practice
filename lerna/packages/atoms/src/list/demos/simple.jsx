/**
 * title: 简单列表
 * desc: 列表拥有大、中、小三种尺寸。<br>通过设置 `size` 为 `large` `small` 分别把按钮设为大、小尺寸。若不设置 `size`，则尺寸为中。<br>可通过设置 `header` 和 `footer`，来自定义列表头部和尾部。
 */

import React from 'react';
import { List, Typography } from '@vv-desktop-web-core/atoms';

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.'
];

export default function Demo() {
  return (
    <div>
      <h3 style={{ marginBottom: 16 }}>Default Size</h3>
      <List
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        bordered
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <Typography.Text mark>[ITEM]</Typography.Text> {item}
          </List.Item>
        )}
      />
      <h3 style={{ margin: '16px 0' }}>Small Size</h3>
      <List
        size="small"
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        bordered
        dataSource={data}
        renderItem={item => <List.Item>{item}</List.Item>}
      />
      <h3 style={{ margin: '16px 0' }}>Large Size</h3>
      <List
        size="large"
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        bordered
        dataSource={data}
        renderItem={item => <List.Item>{item}</List.Item>}
      />
    </div>
  );
}
