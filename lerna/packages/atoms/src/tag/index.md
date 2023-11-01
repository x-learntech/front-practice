---
title: Tag 标签 🐤
group:
    title: 数据展示
    path: /atoms/data-display
    order: 5
nav:
    title: 组件
    path: /atoms
---

# Tag 标签

进行标记和分类的小标签。

## 何时使用

- 用于标记事物的属性和维度。
- 进行分类。

## 代码演示

<div class='waterfall'>
    <code src="./demos/basic.jsx"></code>
    <code src="./demos/colorful.jsx"></code>
    <!-- <code src="./demos/colorful-inverse.jsx"></code> -->
    <code src="./demos/control.jsx"></code>
    <code src="./demos/customize.jsx"></code>
    <code src="./demos/checkable.jsx"></code>
    <code src="./demos/hot-tags.jsx"></code>
    <code src="./demos/controlled.jsx"></code>
    <code src="./demos/animation.jsx"></code>
    <code src="./demos/icon.jsx"></code>
    <code src="./demos/status.jsx"></code>
</div>

## API

### Tag

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| type | 标签类型，胶囊（round）和略带圆角型（normal） | string | round | VV |
| color | antd默认功能，改了内置五种颜色  | string \| `success` \| `error` \| `default` \| `warning` \| `info` |  |  |
| icon | 当color为五种预设颜色时且icon为true则已内置默认icon，否则支持自定义icon  | string \| ReactNode |  |  |
| border | 边框，当有存在这个属性时为线性tag，否则为面性  | boolean | false | VV |
| afterClose | 关闭动画完成后的回调，请使用 `onClose`, 我们将在下个版本删除此项 | () => void | - |  |
| closable | 标签是否可以关闭 | boolean | false |  |
| onClose | 关闭时的回调 | (e) => void | - |  |
| visible | 是否显示标签 | boolean | `true` | 3.7.0 |
| size | 设置按钮大小，可选值为 small large 或者不设  | string | `default` | VV |

### Tag.CheckableTag

| 参数     | 说明                 | 类型              | 默认值 | 版本 |
| -------- | -------------------- | ----------------- | ------ | ---- |
| checked  | 设置标签的选中状态   | boolean           | false  |      |
| onChange | 点击标签时触发的回调 | (checked) => void | -      |      |
