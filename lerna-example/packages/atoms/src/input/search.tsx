/**
 * title: 搜索框
 * desc: 带搜索按钮的搜索框
 */

import React, { ChangeEvent, useContext, forwardRef, ForwardRefRenderFunction } from 'react';
import AntdInput from 'antd/es/input/Input';
import { ConfigConsumerProps } from 'antd/es/config-provider';
import { ConfigContext } from 'antd/es/config-provider/context';
import { SearchProps } from 'antd/es/input';
import classnames from 'classnames';
import { IExtendProps } from './typings';
import { useControllableValue } from '@xx-desktop-web-core/hooks';
import { SearchOutlined } from '@ant-design/icons';

/***
 * 直接使用input放前置的搜索图标当搜索框
 * */
const Search: ForwardRefRenderFunction<any, SearchProps> = (
  { className, ...reset }: SearchProps & IExtendProps,
  ref
) => {
  const { getPrefixCls } = useContext<ConfigConsumerProps>(ConfigContext as any);
  const prefixCls = getPrefixCls('search');
  const [value, onChange] = useControllableValue<string>(reset);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => onChange?.(event.target.value);

  return (
    <div className={`${prefixCls}-warp`}>
      <AntdInput
        className={classnames(className)}
        ref={ref}
        onChange={handleChange}
        value={value}
        prefix={<SearchOutlined style={{fontSize:16}}/>}
        {...reset}
      />
    </div>
  );
};

export default forwardRef(Search);
