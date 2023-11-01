import React, { FC, useContext, useMemo } from 'react';
import { Tabs as AntdTabs } from 'antd';
import { TabsProps as AntdTabsProps, TabsType as AntdTabsType } from 'antd/es/tabs';
import { ConfigContext } from 'antd/es/config-provider/context';
import { ConfigConsumerProps } from 'antd/es/config-provider';
import classNames from 'classnames';
export type TabsType = AntdTabsType | 'radio-tab';
export type TabsActiveHighlightWidth = 'fixed' | 'flexible';

interface TabsComponentProps extends Omit<AntdTabsProps, 'type'> {
  type?: TabsType;
  activeHighlightWidth?: TabsActiveHighlightWidth;
}
export interface TabsProps extends FC<TabsComponentProps> {
  TabPane: typeof AntdTabs.TabPane;
}

const Tabs: TabsProps = ({ type, activeHighlightWidth = 'fixed', tabPosition, ...resetProps }) => {
  const { getPrefixCls } = useContext<ConfigConsumerProps>(ConfigContext as any);
  const prefixCls = getPrefixCls('tabs');

  const hasRadioType = useMemo(() => {
    return tabPosition !== 'left' && tabPosition !== 'right';
  }, [tabPosition]);

  return (
    <AntdTabs
      type={type as AntdTabsType}
      tabPosition={tabPosition}
      {...resetProps}
      className={classNames(resetProps?.className, {
        [`${prefixCls}-radio-tab`]: hasRadioType && type === 'radio-tab',
        [`${prefixCls}-active-fixed`]: activeHighlightWidth === 'fixed'
      })}
    />
  );
};

Tabs.TabPane = AntdTabs.TabPane;
Tabs.displayName = 'VVTabs';

export default Tabs;
