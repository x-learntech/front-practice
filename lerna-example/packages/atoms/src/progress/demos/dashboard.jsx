/**
 * title: 仪表盘
 * desc: 通过设置 `type=dashboard`，可以很方便地实现仪表盘样式的进度条
 */
/* eslint-disable */

import { Progress } from '@vv-desktop-web-core/atoms';
export default function Demo() {
  return <Progress type="dashboard" percent={75} />;
}
