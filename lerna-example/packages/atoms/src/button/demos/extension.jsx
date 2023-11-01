/**
 * title: 扩展按钮
 * desc: 增加主按钮的阴影效果（shadow），用于特定场景；新增主虚线按钮（type="primaryDashed"）。
 */
/* eslint-disable */
import React from 'react';
import { Button, Space } from '@vv-desktop-web-core/atoms';
import { SearchOutlined } from '@ant-design/icons';

export default function Demo() {
    return (
        <Space wrap>
            <Button type="primary" shadow>Shadow Button</Button>
            <Button shape="round" type="primaryDashed" icon={<SearchOutlined />}>PrimaryDashed Button</Button>
        </Space>
    );
}
