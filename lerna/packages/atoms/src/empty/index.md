---
title: Empty 空状态 🐤
group:
    title: 数据展示
    path: /atoms/data-display
    order: 1
nav:
    title: 组件
    path: /atoms
    
---

空状态时的展示占位图

- 新增内置图片

## 何时使用


- 当目前没有数据时，用于显式的用户提示；
- 初始化场景时的引导创建流程；

## 代码演示

<div class='waterfall'>
    <code src="./demos/basic.jsx"></code>
    <code src="./demos/antd_image.jsx"></code>
    <code src="./demos/vv_image.jsx"></code>
    <code src="./demos/no_description.jsx"></code>
    <code src="./demos/custom.jsx"></code>
</div>

## API

按钮的属性说明如下：

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| description | 自定义描述内容 | ReactNode | - |  |
| image       | 设置显示图片，为 string 时表示自定义图片地址。 | ReactNode | Empty.PRESENTED_IMAGE_DEFAULT |  |
| imageStyle  | 图片样式 | CSSProperties | - |  |


image属性值说明：(antd 默认2种, vv 拓展 11 种)

| 属性 | 类型 | 说明 | 
| --- | --- | --- |
| http:// | String | 自定义的图片地址 | 
| Empty.PRESENTED_IMAGE_DEFAULT | ReactNode | antd 默认图片 |
| Empty.PRESENTED_IMAGE_SIMPLE | ReactNode | antd 默认图片二 |
| Empty.NO_DATA | ReactNode |  推荐文案(下同)：空状态/暂无数据/暂无好友请求/暂无联系人/暂无申请 |
| Empty.NO_SEARCH_RESULT | ReactNode | 暂无搜索结果/无XXXXXX搜索数据 |
| Empty.NO_APPROVAL | ReactNode | 暂无审批 |
| Empty.NO_DEVELOPED | ReactNode | 敬请期待 |
| Empty.NO_MESSAGE | ReactNode | 全部成员已读/未读 |
| Empty.NO_NETWORK | ReactNode | 网络未连接/网络已断开 |
| Empty.DATA_LOAD_FAIL | ReactNode | 数据加载失败，请刷新重试 |
| Empty.DATA_LOADING | ReactNode | 数据加载中 |
| Empty.NO_RELEASE | ReactNode | 暂无发布/暂无屏蔽公司/暂无明细/提交失败/日程空数据 |
| Empty.NO_PERMISSION | ReactNode | 系统升级维护中/页面维护中/暂无权限 |
| Empty.NO_UPLOAD_FILE | ReactNode | 文件夹是空的/暂无附件/存储 |