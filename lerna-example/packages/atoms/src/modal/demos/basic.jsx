/**
 * title: Modal类型
 * desc: 五种基本confirm的类型，除了info，默认都内置icon。
 */
/* eslint-disable */
import React, { useState } from 'react'
import { Button, Modal } from '@xx-desktop-web-core/atoms';

export default function Demo() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <>
      <Button type="primary" onClick={() => setIsModalVisible(true)}>
        Modal
      </Button>
      <Button onClick={() => {
        Modal.confirm({
          title: '确认切换企业并刷新确认切换企业并刷新确认切换企业并刷新',
          content: '这是描述这是描述这是描述这是描述这是描述这是描述这是描述这是描述'
        })
      }}>
        confirm
      </Button>
      <Button onClick={() => {
        Modal.warning({
          title: '确认切换企业并刷新数据？',
          content: '如有未保存的数据，切换后将丢失，请先保存对应的数据',
          okText: '确定'
        })
      }}>
        warning
      </Button>
      <Button onClick={() => {
        Modal.error({
          title: '确认切换企业并刷新'
        })
      }}>
        error
      </Button>
      <Button onClick={() => {
        Modal.success({
          title: '确认切换企业并刷新'
        })
      }}>
        success
      </Button>
      <Button onClick={() => {
        Modal.info({
          title: '确认切换企业并刷新'
        })
      }}>
        info
      </Button>
      <Modal title="Basic Modal" visible={isModalVisible} onCancel={() => setIsModalVisible(false)} onOk={() => setIsModalVisible(false)}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
}
