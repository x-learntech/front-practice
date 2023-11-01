/**
 * title: 按钮类型
 * desc: 按钮有五种类型：主按钮、次按钮、虚线按钮、文本按钮和链接按钮。主按钮在同一个操作区域最多出现一次。
 */
/* eslint-disable */
import React from 'react';
import { Menu, Divider, Space, Button } from '@xx-desktop-web-core/atoms';

import { DownOutlined, QuestionCircleOutlined, BorderOuterOutlined } from '@ant-design/icons';

import Dropdown from '../dropdown';
export default function Demo() {
  const menu = (
    <Menu
      items={[
        {
          key: '1',
          label: '陈燕华'
        },
        {
          key: '2',
          label: '李雅真'
        },

        {
          key: '3',
          label: '王大锤'
        }
      ]}
    />
  );
  return (
    <div>
      <p>选择器类型：</p>

      <Dropdown overlay={menu}>文本类型</Dropdown>
      <br />

      <Dropdown overlay={menu}>
        <Button type="primary" shape="default" icon={<DownOutlined />} style={{ width: 130 }}>
          容器类型
        </Button>
      </Dropdown>
      <br />

      <Dropdown overlay={menu}>
        <Button type="ghost" shape="default" icon={<DownOutlined />}>
          轮廓类型
        </Button>
      </Dropdown>
      <br />

      <Dropdown overlay={menu}>
        <div style={{ display: 'flex', alignItems: 'center', width: 130 }}>
          <BorderOuterOutlined />
          <Button type="text" shape="default" icon={<DownOutlined style={{ fontSize: 12 }} />}>
            组合类型
          </Button>
        </div>
      </Dropdown>
      <br />

      <Dropdown overlay={menu}>
        <div style={{ display: 'flex', alignItems: 'center', width: 130 }}>
          <BorderOuterOutlined />
          <Button type="primary" shape="default" icon={<DownOutlined style={{ fontSize: 12 }} />}>
            组合类型
          </Button>
        </div>
      </Dropdown>
      <Divider />
      <Divider />
      <Divider />
      <Divider />
      <p>三种尺寸：28px/36px/40px</p>

      <Dropdown overlay={menu} trigger={['click']}>
        <Button size="small" shape="default" type="ghost" icon={<DownOutlined style={{ fontSize: 12 }} />}>
          请选择(small)
        </Button>
      </Dropdown>
      <Divider />
      <Dropdown overlay={menu} trigger={['click']}>
        <Button size="middle" shape="default" type="ghost" icon={<DownOutlined style={{ fontSize: 12 }} />}>
          请选择(middle)
        </Button>
      </Dropdown>
      <Divider />
      <Dropdown overlay={menu} trigger={['click']}>
        <Button size="large" shape="default" type="ghost" icon={<DownOutlined style={{ fontSize: 12 }} />}>
          请选择(large)
        </Button>
      </Dropdown>
      <Divider />
      <Dropdown overlay={menu} size="large" disabled>
        <Button disabled shape="default" type="primary" icon={<DownOutlined style={{ fontSize: 12 }} />}>
          禁止点击
        </Button>
      </Dropdown>
    </div>
  );
}
