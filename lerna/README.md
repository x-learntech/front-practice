# lerna

文档：[https://www.lernajs.cn/](https://www.lernajs.cn/)

## 配置

主要是指 lerna.json 文件。

- version: 当前仓库的版本，Independent mode 请设置为 independent
- npmClient: 指定运行命令的客户端程序（默认是 npm）
- ignoreChanges: 一个不包含在 lerna changed/publish 的 glob 数组。使用这个去阻止发布不必要的更新，比如修复 README.md
- command
  - publish
    - registry：设置自定义的 npm 代理（比如使用 verdaccio 搭建的私服）
    - conventionalCommits：lerna version 会自动决定 version bump 和生成 CHANGELOG 文件
    - message：一个 publish 时的自定义 commit 信息。详情请查看[@lerna/version](https://github.com/lerna/lerna/tree/main/commands/version#--message-msg)

## 步骤

1. 初始化 `lerna init`
2. 安装npm依赖库 `lerna bootstrap`
3. 把依赖关系通过 package.json 进行关联
4. 通过 `lerna link` 完成本地模块之间的引用
