/**
 * title: 空状态基本
 * desc: 简单展示
 */
import React from 'react';
import { Empty } from '@xx-desktop-web-core/atoms';

export default () => (
    <>
        <Empty />
        <br />
        <Empty  description="自定义无数据描述内容"/>
    </>
);
