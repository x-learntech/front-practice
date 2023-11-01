import { Modal as VVModal } from 'antd';
import type { ModalProps } from 'antd/es/modal';
import type { ModalFunc } from 'antd/es/modal/confirm';
import React, { FC } from 'react';
import { CloseOutlined, CheckCircleFilled, CloseCircleFilled, ExclamationCircleFilled } from '@ant-design/icons';

export interface VVModalProps extends FC<ModalProps> {
  info: ModalFunc;
  confirm: ModalFunc;
  error: ModalFunc;
  warning: ModalFunc;
  success: ModalFunc;
  displayName: string;
}

const Modal: VVModalProps = ({ mask, children, ...otherProps }) => {

  return (
    <VVModal
      mask={mask}
      closeIcon={<CloseOutlined />}
      centered
      {...otherProps}
    >
      {children}
    </VVModal>
  );
};

Modal.displayName = 'VVModal';

// @ts-ignore
const modalFuncFactory = (method, config) => {
  const _config = { ...config, closable: true };

  if (!_config.icon) {
    switch (method) {
      case 'info':
        _config.icon = null;
        break;
      case 'warning':
        _config.icon = (
          <ExclamationCircleFilled />
        );
        break;
      case 'confirm':
        _config.icon = (
          <ExclamationCircleFilled />
        );
        break;
      case 'success':
        _config.icon = (
          <CheckCircleFilled />
        );
        break;
      case 'error':
        _config.icon = (
          <CloseCircleFilled />
        );
        break;
    }
  }
  return VVModal[method](_config);
};

Modal.info = config => modalFuncFactory('info', config);
Modal.success = config => modalFuncFactory('success', config);
Modal.warning = config => modalFuncFactory('warning', config);
Modal.confirm = config => modalFuncFactory('confirm', config);
Modal.error = config => modalFuncFactory('error', config);

export default Modal;
