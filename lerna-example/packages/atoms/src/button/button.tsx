import React, { forwardRef, useContext } from 'react';
import { Button as AntdButton, ButtonProps } from 'antd';
import { ConfigContext } from 'antd/es/config-provider/context';
import { ConfigConsumerProps } from 'antd/es/config-provider';
import classNames from 'classnames';
import { ButtonType } from 'antd/es/button';
import { SizeType } from 'antd/es/config-provider/SizeContext';

export type VVBtnType = ButtonType | 'secondary' | 'primaryDashed';
export type VVSizeType = SizeType | 'largeX';
export interface VVButtonProps extends Omit<ButtonProps, 'type' | 'size'> {
  shadow?: boolean;
  type?: VVBtnType;
  size?: VVSizeType;
}

const Button: React.ForwardRefExoticComponent<VVButtonProps & React.RefAttributes<HTMLElement>> = forwardRef(
  ({ shadow, className, type, size, icon, shape, ...rest }, ref) => {
    const { getPrefixCls } = useContext<ConfigConsumerProps>(ConfigContext as any);
    const prefixCls = getPrefixCls('btn');

    return (
      <AntdButton
        {...rest}
        ref={ref}
        icon={icon}
        shape={shape}
        type={type as ButtonType}
        size={size as SizeType}
        className={classNames(
          shadow && `${prefixCls}-shadow`,
          size === 'largeX' && `${prefixCls}-lgX`,
          size === 'middle' && `${prefixCls}-m`,
          icon && `${prefixCls}-with-icon`,
          className
        )}
      />
    );
  }
);

export default Button;
