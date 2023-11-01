/* eslint-disable */
import React from 'react';
import { Tooltip } from '@vv-desktop-web-core/atoms';

export default function Demo() {
  return (
    <>
      <Tooltip title="添加参与人" placement="top">
        <div style={{ height: 24, width: 14, background: '#000' }} />
      </Tooltip>

      <br />
      <br />
      <br />
      <br />
      <br />
      <Tooltip title="添加参与人" placement="left">
        <div style={{ height: 24, width: 14, background: '#000' }} />
      </Tooltip>

      <br />
      <br />
      <br />
      <br />
      <br />
      <Tooltip title="添加参与人" placement="right">
        <div style={{ height: 24, width: 14, background: '#000' }} />
      </Tooltip>

      <br />
      <br />
      <br />
      <br />
      <br />
      <Tooltip title="添加参与人" placement="bottom">
        <div style={{ height: 24, width: 14, background: '#000' }} />
      </Tooltip>
    </>
  );
}
