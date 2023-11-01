/**
 * title: 进度圈
 * desc: 圈形的进度。
 */
/* eslint-disable */

import { Progress } from '@xx-desktop-web-core/atoms';
export default function Demo() {
  return (
    <div>
      <Progress type="circle" percent={75} />
      <Progress type="circle" percent={70} status="exception" />
      <Progress type="circle" percent={100} />
    </div>
  );
}
{
  /* <style>
.ant-progress-circle-wrap,
.ant-progress-line-wrap {
  margin-right: 8px;
  margin-bottom: 5px;
}
</style> */
}
