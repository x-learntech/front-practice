import React from 'react';
import { notification as AntNotification } from 'antd';
import { CheckCircleFilled, CloseCircleFilled, ExclamationCircleFilled } from '@ant-design/icons';
import type { ArgsProps, NotificationApi } from 'antd/es/notification';

export interface VVNotificationProps extends NotificationApi {
  open: (args: ArgsProps) => void;
  info: (args: ArgsProps) => void;
  error: (args: ArgsProps) => void;
  warning: (args: ArgsProps) => void;
  success: (args: ArgsProps) => void;
}

// @ts-ignore
const notificationFuncFactory = (method, config) => {
  const _config = { top: 150, duration: 3, ...config };

  if (!_config.icon) {
    switch (method) {
      case 'info':
        _config.icon = <ExclamationCircleFilled style={{ color: '#5590F6' }} />;
        break;
      case 'warning':
      case 'warn':
        _config.icon = <ExclamationCircleFilled style={{ color: '#FFA22D' }} />;
        break;
      case 'warn':
        _config.icon = <ExclamationCircleFilled style={{ color: '#FFA22D' }} />;
        break;
      case 'success':
        _config.icon = <CheckCircleFilled style={{ color: '#44C69D' }} />;
        break;
      case 'error':
        _config.icon = <CloseCircleFilled style={{ color: '#F55656' }} />;
        break;
    }
  }
  return AntNotification[method](_config);
};

const VVNotification: VVNotificationProps = {
  ...AntNotification,
  info: config => notificationFuncFactory('info', config),
  success: config => notificationFuncFactory('success', config),
  warning: config => notificationFuncFactory('warning', config),
  open: config => notificationFuncFactory('open', config),
  error: config => notificationFuncFactory('error', config),
  warn: config => notificationFuncFactory('warn', config)
};

export default VVNotification;
