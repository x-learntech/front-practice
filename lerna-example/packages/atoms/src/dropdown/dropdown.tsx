import React, { memo, useContext } from 'react';
import { ConfigConsumerProps } from 'antd/es/config-provider';
import { ConfigContext } from 'antd/es/config-provider/context';
import { Button, Dropdown as AntdDropdown } from 'antd';

import { DownOutlined } from '@ant-design/icons';

/**
 * 下拉菜单
 * 当传入纯字符串文本时，增加箭头icon,若有传入downIcon，则使用传入的downIcon作为箭头
 * 箭头必须为span或img,带类名 anticon 或 iconfont
 *
 * */
const VVDropdown = (props: any) => {
  const { getPrefixCls } = useContext<ConfigConsumerProps>(ConfigContext as any);
  const prefixCls = getPrefixCls('dropdown');

  const { downIcon = null } = props;
  if (!props?.children) {
    return null;
  }

  return (
    <div className={`${prefixCls}-warp`}>
      {typeof props?.children === 'string' ? (
        <AntdDropdown {...props}>
          <Button type="text" shape="default">
            <span>{props.children}</span>
            {downIcon || <DownOutlined />}
          </Button>
        </AntdDropdown>
      ) : (
        <AntdDropdown {...props}>
          {Array.isArray(props.children) ? <div>{props.children}</div> : props.children}
        </AntdDropdown>
      )}
    </div>
  );
};

VVDropdown.displayName = 'VVDropdown';

export default memo(VVDropdown);
