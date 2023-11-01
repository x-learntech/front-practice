/**
 * title: 自定义文字格式
 * desc: 属性指定格式。
 */
/* eslint-disable */

import { Progress } from '@vv-desktop-web-core/atoms';

export default function Demo() {
  return (
    <div>
      <Progress type="circle" percent={75} format={percent => `${percent} Days`} />
      <Progress type="circle" percent={100} format={() => 'Done'} />
    </div>
  );
}
{
  /* <style>
div.ant-progress-circle,
div.ant-progress-line {
  margin-right: 8px;
  margin-bottom: 8px;
}
</style> */
}
