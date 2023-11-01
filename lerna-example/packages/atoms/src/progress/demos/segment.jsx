/**
 * title: 分段进度条
 * desc: 标准的进度条。
 */
/* eslint-disable */

import { Progress, Tooltip } from '@xx-desktop-web-core/atoms';
export default function Demo() {
  return (
    <div>
      <Tooltip title="3 done / 3 in progress / 4 to do">
        <Progress percent={60} successPercent={30} />
      </Tooltip>

      <Tooltip title="3 done / 3 in progress / 4 to do">
        <Progress percent={60} successPercent={30} type="circle" />
      </Tooltip>

      <Tooltip title="3 done / 3 in progress / 4 to do">
        <Progress percent={60} successPercent={30} type="dashboard" />
      </Tooltip>
    </div>
  );
}
