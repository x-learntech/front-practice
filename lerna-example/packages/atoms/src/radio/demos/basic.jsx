/**
 * title: 按钮类型
 * desc: 按钮有五种类型：主按钮、次按钮、虚线按钮、文本按钮和链接按钮。主按钮在同一个操作区域最多出现一次。
 */
/* eslint-disable */
import React from 'react';
import { Radio } from '@vv-desktop-web-core/atoms';
import '../style/index.less'

export default function Demo() {
  return (
    <>
      <Radio.Group value={2}>
        <Radio value={0}>Radio1</Radio>
        <Radio value={1}>Radio2</Radio>
        <Radio value={2} disabled>Radio disabled</Radio>
        <Radio value={3} disabled>Radio disabled</Radio>
      </Radio.Group>
    </>
  );
}
