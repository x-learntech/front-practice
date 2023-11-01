/**
 * title: 按钮类型
 * desc: 按钮有五种类型：主按钮、次按钮、虚线按钮、文本按钮和链接按钮。主按钮在同一个操作区域最多出现一次。
 */
/* eslint-disable */
import React from 'react';
import { Button, Space } from '@vv-desktop-web-core/atoms';

export default function Demo() {
  return (
    <Space wrap>
      <Button type="primary">Primary Button</Button>
      <Button type="primary" disabled>
        Primary Button
      </Button>
      <br />
      <Button type="secondary">Secondary Button</Button>
      <Button type="secondary" disabled>
        Secondary Button
      </Button>
      <br />
      <Button>Default Button</Button>
      <Button disabled>Default Button</Button>
      <br />
      <Button type="dashed">Dashed Button</Button>
      <Button type="dashed" disabled>
        Dashed Button
      </Button>
      <br />
      <Button type="text">Text Button</Button>
      <Button type="text" disabled>
        Text Button
      </Button>
      <br />
      <Button type="link">Link Button</Button>
      <Button type="link" disabled>
        Link Button
      </Button>
    </Space>
  );
}
