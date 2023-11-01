/**
 * title: 进度条
 * desc: 标准的进度条。
 */
/* eslint-disable */

import { Progress } from '@xx-desktop-web-core/atoms';

const Basic = () => {
  return (
    <div>
      <Progress percent={30} />
      <Progress percent={50} status="active" />
      <Progress percent={70} status="exception" />
      <Progress percent={100} />
      <Progress percent={50} showInfo={false} />
    </div>
  );
};
export default Basic;
