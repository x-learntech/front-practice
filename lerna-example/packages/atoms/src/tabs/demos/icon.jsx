/**
 * title: 图标
 * desc: 有图标的标签
 */
import React from 'react';
import { Tabs } from '@xx-desktop-web-core/atoms';
import { QuestionCircleOutlined, ExclamationCircleOutlined } from '@ant-design/icons';

const { TabPane } = Tabs;

const onChange = key => {
  console.log(key);
};

const Icon = () => {
  return (
    <Tabs defaultActiveKey="2">
      <TabPane
        tab={
          <span>
            <ExclamationCircleOutlined />
            Tab 1
          </span>
        }
        key="1"
      >
        Tab 1
      </TabPane>
      <TabPane
        tab={
          <span>
            <QuestionCircleOutlined />
            Tab 2
          </span>
        }
        key="2"
      >
        Tab 2
      </TabPane>
    </Tabs>
  );
};

export default Icon;
