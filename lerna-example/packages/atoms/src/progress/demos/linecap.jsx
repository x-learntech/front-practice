/**
 * title: 圆角/方角边缘
 * desc: 通过设定 `strokeLinecap="square|round"` 可以调整进度条边缘的形状。
 */
/* eslint-disable */

import { Progress } from '@xx-desktop-web-core/atoms';
export default function Demo() {
  return (
    <div>
      <Progress strokeLinecap="square" percent={75} />
      <Progress strokeLinecap="square" type="circle" percent={75} />
      <Progress strokeLinecap="square" type="dashboard" percent={75} />
    </div>
  );
}
