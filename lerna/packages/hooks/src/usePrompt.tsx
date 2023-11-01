import { ModalStaticFunctions } from 'antd/es/modal/confirm';
import React, { ReactNode, useEffect, useLayoutEffect, useRef, useState } from 'react';

import { ExclamationCircleFilled } from '@ant-design/icons';

interface EventDetailType {
  eventName: string;
  next: () => void;
  cancel: () => void;
}

export interface usePromptProps {
  /** 是否拦截 */
  when: boolean;
  /** 自定义拦截处理. 可以在这里做自定义弹框的逻辑处理. 优先级较高; */
  handle?: (eventDetail: EventDetailType) => void;
  /** 可以传 Modal, 或者 Modal.useModal => modal */
  modal?: Omit<ModalStaticFunctions, 'Confirm'>;
  /** 弹框提示消息 */
  message?: string | ((eventDetail: EventDetailType) => string | ReactNode) | ReactNode;
  /** 确定事件. 有值时候, 要执行 next 才可以正常关闭弹框 */
  onOk?: (eventDetail: EventDetailType) => void;
  /** 取消事件. 有值时候, 要执行 next 才可以正常关闭弹框 */
  onCancel?: (eventDetail: EventDetailType) => void;
}

/**
 * 路由守卫
 * 使用示例:
 *  usePrompt({ when: true, handle: ({ next, cancel }) => { 自定义弹框逻辑 } })
 *  usePrompt({ when: true, message: '确定关闭?', modal: Modal  })
 */
const usePrompt = ({ when, handle, modal, message, onOk, onCancel }: usePromptProps) => {
  if (!handle && !modal) {
    console.error('参数 handle 或者 modal 不能同时为空!');
  }
  // @ts-ignore
  const currentTabId = window.__MICRO_APP_NAME__;
  const targetContainer = document.querySelector('#ice-container');
  const [lock, setLock] = useState(false);

  const handleRef = useRef<((eventDetail: EventDetailType) => void) | undefined>();
  useEffect(() => {
    handleRef.current = handle;
  }, [handle]);
  const onOkRef = useRef<((eventDetail: EventDetailType) => void) | undefined>();
  useEffect(() => {
    onOkRef.current = onOk;
  }, [onOk]);
  const onCancelRef = useRef<((eventDetail: EventDetailType) => void) | undefined>();
  useEffect(() => {
    onCancelRef.current = onCancel;
  }, [onCancel]);

  useLayoutEffect(() => {
    const eventFn = (event: any) => {
      if (lock) {
        event.preventDefault();
      }
      if (when && handleRef.current) {
        event.preventDefault();
        handleRef.current(event.detail);
      } else if (when && modal && !lock) {
        event.preventDefault();
        setLock(true); // 加锁
        const _message = message instanceof Function ? message(event.detail) : message;
        modal.confirm({
          centered: true,
          content: (
            <div
              style={{
                fontSize: '16px',
                color: '#262626',
                lineHeight: '24px',
                fontWeight: 500
              }}
            >
              {_message}
            </div>
          ),
          icon: <ExclamationCircleFilled />,
          // okText: '确定',
          // cancelText: '取消',
          closable: true,
          onOk: () => {
            if (onOkRef.current) {
              onOkRef.current(event.detail);
            } else {
              event.detail.next();
            }
            setLock(false); // 解锁
          },
          onCancel: () => {
            if (onCancelRef.current) {
              onCancelRef.current(event.detail);
            } else {
              event.detail.cancel?.();
            }
            setLock(false); // 解锁
          }
        });
      }
    };

    targetContainer && targetContainer.addEventListener(`beforeRouteChange-${currentTabId}`, eventFn);
    return () => {
      targetContainer && targetContainer.removeEventListener(`beforeRouteChange-${currentTabId}`, eventFn);
    };
  }, [message, modal, when, targetContainer, currentTabId, handle, lock]);

  // 清除锁
  useEffect(() => {
    const clearLock = () => {
      setLock(false);
    };

    window.addEventListener('beforeunload', clearLock);
    return () => {
      window.removeEventListener('beforeunload', clearLock);
    };
  }, []);
};

export default usePrompt;
