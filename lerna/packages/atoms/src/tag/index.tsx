import React, { useContext, useMemo } from 'react';
import { Tag as AntdTag } from 'antd';
import { TagProps } from 'antd/es/tag';
import { ConfigContext } from 'antd/es/config-provider/context';
import { ConfigConsumerProps } from 'antd/es/config-provider';
import classnames from 'classnames';
import parse from 'color-parse';
import { CheckCircleFilled, CloseCircleFilled, ExclamationCircleFilled, SyncOutlined } from '@ant-design/icons';

export interface IExtendProps {
    type?: 'round' | 'normal'
    color?: 'success' | 'error' | 'default' | 'warning' | 'info' | string
    size?: 'small' | 'default' | 'large';
    border?: boolean;
}

type VVTagProps = Omit<TagProps, 'color'>

const DEFAULT_COLOR = ['success','error','default','warning','info'];

const DEFAULT_COLOR_ICON = {
  'success': <CheckCircleFilled />,
  'error': <CloseCircleFilled />,
  'warning': <ExclamationCircleFilled />,
  'info': <SyncOutlined spin />,
}

const Tag = ({
    className,
    size,
    children,
    color,
    border = false,
    type='round',
    icon,
    ...reset
}: VVTagProps & IExtendProps) => {
    const { getPrefixCls } = useContext<ConfigConsumerProps>(ConfigContext as any);

    const prefixCls = getPrefixCls('tag');

    const IS_DEFAULT_COLOR = DEFAULT_COLOR.includes(color as string)

    const iconContent = useMemo(() => {
      if (IS_DEFAULT_COLOR && icon) return DEFAULT_COLOR_ICON[color as string]
      return icon
    }, [IS_DEFAULT_COLOR, icon, color])

    const setToggleColor = (value: string, opacity: number = 0.1) => {
      let color = '';
      if (value.indexOf('rgb') > -1) {
          color = value;
      } else {
        color = `${parse(value)?.values.join()},${opacity}`;
      }
      return color
    };

    const style = useMemo(() => {
        if (IS_DEFAULT_COLOR) {
            return {};
        }
        let defaultStyle = { color: color || '', backgroundColor: '' };
        if (color?.startsWith('#') || color?.startsWith('rgb')) {
            const borderColor = border && setToggleColor(color, 0.4);
            const bgColor = setToggleColor(color, 0.1);

            defaultStyle = { ...defaultStyle, ...{ borderColor: border ? `rgba(${borderColor})` : '' }, backgroundColor: border ? 'transparent' : `rgba(${bgColor})` };
            console.log(defaultStyle)
        }
        return { style: defaultStyle };
    }, [border, color, IS_DEFAULT_COLOR]);

    return (
        <AntdTag
            className={classnames(
              size && `${prefixCls}-${size}`,
              reset?.onClick && `${prefixCls}-click`,
              IS_DEFAULT_COLOR && `${prefixCls}-${color}`,
              border && `${prefixCls}-border`,
              type && `${prefixCls}-${type}`,
              icon && `${prefixCls}-with-icon`,
              className
            )}
            icon={iconContent}
            color={color}
            {...style}
            {...reset}
        >
            {children}
        </AntdTag>
    );
};
Tag.CheckableTag = AntdTag.CheckableTag;
export default Tag;
