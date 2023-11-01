import React from 'react';
import { TimePicker } from '@vv-desktop-web-core/atoms';
import '../style/index.less';
import moment from 'moment';

export default function Demo() {
  const onChange = (time, timeString) => {
    console.log(time, timeString);
  };
  return (
    <>
      <div>选择时间</div>
      <br />
      <TimePicker showNow format="HH:mm" />
      <br />
      <br />
      <br />
      <br />

      <div>选择时间</div>
      <br />
      <TimePicker showNow format="HH:mm:ss" />
      <br />
      <br />

      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}
