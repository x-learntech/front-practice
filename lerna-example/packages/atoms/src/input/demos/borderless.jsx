/**
 * title: 无边框
 * desc: 没有边框。
 */

import React from 'react';
import { Input } from '@xx-desktop-web-core/atoms';

export default () => (
    <div>
        <Input placeholder="Borderless" bordered={false} />
        <br />
        <br />
        <Input placeholder="Borderless disabled" disabled bordered={false} />
    </div>
);
