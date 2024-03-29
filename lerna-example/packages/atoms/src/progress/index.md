---
title: Progress 进度条
group:
  title: 反馈
  path: /atoms/feedback
  order: 6
nav:
  title: 组件
  path: /atoms
---

# Progress 进度条

展示操作的当前进度。

## 何时使用

在操作需要较长时间才能完成时，为用户显示该操作的当前进度和状态。

- 当一个操作会打断当前界面，或者需要在后台运行，且耗时可能超过 2 秒时；
- 当需要显示一个操作完成的百分比时。

## 代码演示

<div class='waterfall'>
    <code src="./demos/line.jsx"></code>
    <code src="./demos/circle.jsx"></code>
    <code src="./demos/line-mini.jsx"></code>
    <code src="./demos/circle-mini.jsx"></code>
    <code src="./demos/circle-dynamic.jsx"></code>
    <code src="./demos/dynamic.jsx"></code>
    <code src="./demos/format.jsx"></code>
    <code src="./demos/dashboard.jsx"></code>
    <code src="./demos/segment.jsx"></code>
    <code src="./demos/linecap.jsx"></code>
    <code src="./demos/gradient-line.jsx"></code>
</div>

<style>
    .ant-btn, .ant-progress {
        margin-right: 8px;
        margin-bottom: 12px;
    }
    .ant-progress-circle-wrap,
    .ant-progress-line-wrap {
        margin-right: 8px;
        margin-bottom: 5px;
    }
</style>

## API

各类型共用的属性。

| 属性           | 说明                                                           | 类型                              | 默认值                     | 版本  |
| -------------- | -------------------------------------------------------------- | --------------------------------- | -------------------------- | ----- |
| type           | 类型，可选 `line` `circle` `dashboard`                         | string                            | `line`                     |       |
| format         | 内容的模板函数                                                 | function(percent, successPercent) | `percent => percent + '%'` |       |
| percent        | 百分比                                                         | number                            | 0                          |       |
| showInfo       | 是否显示进度数值或状态图标                                     | boolean                           | true                       |       |
| status         | 状态，可选：`success` `exception` `normal` `active`(仅限 line) | string                            | -                          |       |
| strokeLinecap  |                                                                | Enum{ 'round', 'square' }         | `round`                    | 3.8.0 |
| strokeColor    | 进度条的色彩                                                   | string                            | -                          | 3.7.0 |
| successPercent | 已完成的分段百分比                                             | number                            | 0                          | 3.2.0 |

### `type="line"`

| 属性        | 说明                               | 类型                                                      | 默认值 | 版本   |
| ----------- | ---------------------------------- | --------------------------------------------------------- | ------ | ------ |
| strokeWidth | 进度条线的宽度，单位 px            | number                                                    | 10     | 3.13.1 |
| strokeColor | 进度条的色彩，传入 object 时为渐变 | string \| { from: string; to: string; direction: string } | -      | 3.16.0 |

### `type="circle"`

| 属性        | 说明                                             | 类型             | 默认值 | 版本   |
| ----------- | ------------------------------------------------ | ---------------- | ------ | ------ |
| width       | 圆形进度条画布宽度，单位 px                      | number           | 132    | 3.13.1 |
| strokeWidth | 圆形进度条线的宽度，单位是进度条画布宽度的百分比 | number           | 6      | 3.13.1 |
| strokeColor | 圆形进度条线的色彩，传入 object 时为渐变         | string \| object | -      | 3.19.8 |

### `type="dashboard"`

| 属性        | 说明                                               | 类型                                     | 默认值 | 版本   |
| ----------- | -------------------------------------------------- | ---------------------------------------- | ------ | ------ |
| width       | 仪表盘进度条画布宽度，单位 px                      | number                                   | 132    | 3.13.1 |
| strokeWidth | 仪表盘进度条线的宽度，单位是进度条画布宽度的百分比 | number                                   | 6      | 3.13.1 |
| gapDegree   | 仪表盘进度条缺口角度，可取值 0 ~ 360               | number                                   | 0      | 3.13.1 |
| gapPosition | 仪表盘进度条缺口位置                               | Enum{ 'top', 'bottom', 'left', 'right' } | `top`  | 3.13.1 |
