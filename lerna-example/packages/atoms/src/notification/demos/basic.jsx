/**
 * title: 最简单的用法，3 秒后自动关闭。
 * desc: 通知提醒，延时3s关闭,前面四种默认带icon，Notification.open不带icon。
 */
/* eslint-disable */
import React from 'react'
import { Button, notification } from '@vv-desktop-web-core/atoms';

export default function Demo() {

  const openNotificationWithIcon = (type) => {
    notification[type]({
      message: 'Notification Title',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    });
  };
  return (
    <>
      <Button type="primary" onClick={() => {
        notification.open({
          message: 'Notification Title',
          description:
          'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
          onClick: () => {
            console.log('Notification Clicked!');
          },
        });
      }}>
        Open
      </Button>


      <Button onClick={() => openNotificationWithIcon('success')}>Success</Button>
      <Button onClick={() => openNotificationWithIcon('info')}>Info</Button>
      <Button onClick={() => openNotificationWithIcon('warning')}>Warning</Button>
      <Button onClick={() => openNotificationWithIcon('error')}>Error</Button>
    </>
  );
}
