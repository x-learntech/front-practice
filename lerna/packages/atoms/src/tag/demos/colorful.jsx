/**
 * title: 多彩标签
 * desc: 我们添加了多种预设色彩的标签样式，用作不同场景使用。如果预设值不能满足你的需求，可以设置为具体的色值。
 */

import React from 'react';
import { Tag } from '@vv-desktop-web-core/atoms';
import './style.css';

export default function Demo() {
    return (
        <div>
            <h4 style={{ margin: '16px 0' }}>自定义文字颜色跟背景颜色及边框:</h4>
            <h4 style={{ marginBottom: 16 }}>Presets:</h4>
            <div>
              <Tag color="#005" border>自定义颜色</Tag>
              <Tag color="#055">自定义颜色</Tag>
            </div>
            <div>
                <Tag color="success" type="normal" icon>预设</Tag>
                <Tag color="success" type="normal" size="large">large</Tag>
                <Tag color="success" type="normal" size="small">small</Tag>
                <Tag color="info" icon>预设</Tag>
                <Tag color="error" icon>预设</Tag>
                <Tag color="default" icon>预设</Tag>
                <Tag color="warning" icon>预设</Tag>
                <br />
                <Tag color="success" border>预设</Tag>
                <Tag color="info" border>预设</Tag>
                <Tag color="error" border>预设</Tag>
                <Tag color="default" border>预设</Tag>
                <Tag color="warning" border>预设</Tag>
                <br />
            </div>
            <h4 style={{ margin: '16px 0' }}>三种尺寸:</h4>
            <div>
                <Tag size="large">大</Tag>
                <Tag>默认</Tag>
                <Tag size="small">小</Tag>
            </div>
            <h4 style={{ margin: '16px 0' }}>存在点击事件有hover效果</h4>
            <div>
                <Tag
                    onClick={() => {
                        console.log('我点击了');
                    }}
                >
                    可点击
                </Tag>
            </div>
        </div>
    );
}
