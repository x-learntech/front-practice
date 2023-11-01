/**
 * title: radia-tab
 * desc: 页签5效果
 */
import React from 'react';
import { Tabs } from '@vv-desktop-web-core/atoms';

const { TabPane } = Tabs;

const onChange = (key) => {
  console.log(key);
};

const Basic = () => {
  return (
    <Tabs defaultActiveKey="1" onChange={onChange} type="radio-tab">
      <TabPane tab="Tab 1" key="1">
        Content of Tab Pane 1
      </TabPane>
      <TabPane tab="Tab 2" key="2" disabled>
        Content of Tab Pane 2
      </TabPane>
      <TabPane tab="Tab 3" key="3">
        Content of Tab Pane 3
      </TabPane>
      <TabPane tab="Tab 4" key="4">
        Content of Tab Pane 4
      </TabPane>
    </Tabs>
  );
};

export default Basic;
