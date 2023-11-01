/**
 * title: 图标按钮
 * desc: 当需要在 `Button` 内嵌入 `Icon` 时，可以设置 `icon` 属性，或者直接在 `Button` 内使用 `Icon` 组件。<br>如果想控制 `Icon` 具体的位置，只能直接使用 `Icon` 组件，而非 `icon` 属性。
 */
/* eslint-disable */
import React from 'react';
import { Button, Tooltip, Space } from '@xx-desktop-web-core/atoms';
import { SearchOutlined } from '@ant-design/icons';

export default function Demo() {
    return (
        <Space wrap>
            <Tooltip title="search">
                <Button type="primary" shape="circle" icon={<SearchOutlined />} />
            </Tooltip>
            <Button type="primary" shape="circle">
                A
            </Button>
            <Button type="primary" icon={<SearchOutlined />}>
                Search
            </Button>
            <Tooltip title="search">
                <Button shape="circle" icon={<SearchOutlined />} />
            </Tooltip>
            <Button icon={<SearchOutlined />}>Search</Button>
            <br />
            <Tooltip title="search">
                <Button shape="circle" icon={<SearchOutlined />} />
            </Tooltip>
            <Button icon={<SearchOutlined />}>Search</Button>
            <Tooltip title="search">
                <Button type="dashed" shape="circle" icon={<SearchOutlined />} />
            </Tooltip>
            <Button type="dashed" icon={<SearchOutlined />}>
                Search
            </Button>
            <Button icon={<SearchOutlined />} href="https://www.google.com" />
            <br />
            <br />
            <Tooltip title="search">
                <Button type="primary" shape="circle" icon={<SearchOutlined />} size="large" />
            </Tooltip>
            <Button type="primary" shape="circle" size="large">
                A
            </Button>
            <Button type="primary" icon={<SearchOutlined />} size="large">
                Search
            </Button>
            <Tooltip title="search">
                <Button shape="circle" icon={<SearchOutlined />} size="large" />
            </Tooltip>
            <Button icon={<SearchOutlined />} size="large">
                Search
            </Button>
            <br />
            <Tooltip title="search">
                <Button shape="circle" icon={<SearchOutlined />} size="large" />
            </Tooltip>
            <Button icon={<SearchOutlined />} size="large">
                Search
            </Button>
            <Tooltip title="search">
                <Button type="dashed" shape="circle" icon={<SearchOutlined />} size="large" />
            </Tooltip>
            <Button type="dashed" icon={<SearchOutlined />} size="large">
                Search
            </Button>
            <Button icon={<SearchOutlined />} size="large" href="https://www.google.com" />
        </Space>
    );
}
