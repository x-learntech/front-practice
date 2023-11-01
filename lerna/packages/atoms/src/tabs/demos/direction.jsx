/**
 * title: 滑动
 * desc: 可以左右、上下滑动，容纳更多标签， 多个方向切换效果， 多个类型切换
 */
import { Tabs } from 'antd';
import { Radio } from '@vv-desktop-web-core/atoms';
import React, { useState } from 'react';

const { TabPane } = Tabs;

const Direction = () => {
  const [mode, setMode] = useState('top');
  const [type, setType] = useState('line');

  const handleModeChange = e => {
    setMode(e.target.value);
  };

  const handleMTypeChange = e => {
    setType(e.target.value);
  };

  return (
    <div>
      <Radio.Group onChange={handleModeChange} value={mode} style={{ marginBottom: 8 }}>
        <Radio.Button value="top">Horizontal Top</Radio.Button>
        <Radio.Button value="left">Vertical Left</Radio.Button>
        <Radio.Button value="right">Vertical Right</Radio.Button>
        <Radio.Button value="bottom">Vertical Bottom</Radio.Button>
      </Radio.Group>
      <Radio.Group onChange={handleMTypeChange} value={type} style={{ marginBottom: 8 }}>
        <Radio.Button value="line">Line</Radio.Button>
        <Radio.Button value="card">Card</Radio.Button>
        <Radio.Button value="editable-card">Editable Card</Radio.Button>
        <Radio.Button value="radio-tab">Radio Tab</Radio.Button>
      </Radio.Group>
      <Tabs defaultActiveKey="1" tabPosition={mode} type={type} style={{ height: 220 }}>
        {[...Array.from({ length: 30 }, (_, i) => i)].map(i => (
          <TabPane tab={`Tab-${i}`} key={i} disabled={i === 28}>
            Content of tab {i}
          </TabPane>
        ))}
      </Tabs>
    </div>
  );
};

export default Direction;
