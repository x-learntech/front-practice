/**
 * title: 动态展示
 * desc: 会动的进度条才是好进度条。
 */
/* eslint-disable */

import { Progress, Button } from '@xx-desktop-web-core/atoms';

const ButtonGroup = Button.Group;
export default function Demo() {
  return (
    <div>
      <Progress percent="0" />
      <Button icon="minus" />
      <Button icon="plus" />
      {/* <ButtonGroup>
        <Button icon="minus" />
        <Button icon="plus" />
      </ButtonGroup> */}
    </div>
  );
}
