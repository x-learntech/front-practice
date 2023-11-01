/**
 * title: 基础
 * desc: 基础用法。
 */

import React from 'react';
import { Select } from '@vv-desktop-web-core/atoms';

const { Option } = Select;

function handleChange(value) {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    console.log(`selected ${value}`);
}

export default function Demo() {
    return (
        <>
            <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="disabled" disabled>
                    Disabled
                </Option>
                <Option value="Yiminghe">yiminghe</Option>
            </Select>
            <Select defaultValue="lucy" style={{ width: 120 }} disabled>
                <Option value="lucy">Lucy</Option>
            </Select>
            <Select defaultValue="lucy" style={{ width: 120 }} loading>
                <Option value="lucy">Lucy</Option>
            </Select>
            <Select defaultValue="lucy" style={{ width: 120 }} allowClear>
                <Option value="lucy">Lucy</Option>
            </Select>
        </>
    );
}
