/**
 * title: 小型进度圈
 * desc: 小一号的圈形进度。
 */
/* eslint-disable */

import { Progress } from '@vv-desktop-web-core/atoms';

export default function Demo() {
  return (
    <div>
      <Progress type="circle" percent={30} width={80} />
      <Progress type="circle" percent={70} width={80} status="exception" />
      <Progress type="circle" percent={100} width={80} />
    </div>
  );
}
