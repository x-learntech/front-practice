# vv-desktop-web-core

桌面端 Web 站点核心库

## 开发指南

1. 安装项目依赖 `yarn`
2. 运行文档项目 `yarn start`
3. 登录npm `yarn login`
4. 构建项目 `yarn run build:all` 并 `yarn run publish` 或者 `lerna publish` 发布项目

### 业务开发过程中的版本管理

日常开发中, 并非把组件在核心库开发好后放入业务端使用的. 而是通过**组件权级提升**的逻辑, 在业务中开发好组件并测试通过后, 把组件提升到核心库当中.  
但是难免会在开发中频繁修改bug, 导致频繁发版. 所以日常业务迭代过程中遵循以下原则:

- 未稳定的组件更新后, 发包用 alpha 的版本号, 等本次业务迭代收尾阶段, 更新成稳定的版本号 (alpha 版本不会被其他项目 install 更新)
  - 具体的操作路径(`lerna publish` -> 选择`Custom Prerelease` -> 填写对应的 alpha 版本号)

## 常用命令

- `yarn`: 安装 packages 下所有项目的依赖
- `lerna publish from-package`: 如果发布包失败, 再次发布会失败, 可以尝试用这个办法
- `yarn run clean`: 清除 packages 下所有项目的依赖
- `lerna publish` / `yarn run publish`: 发布(记得先构建项目)
- `yarn start`: 运行文档项目
- `yarn run docs:build`: 构建文档项目
- `yarn run docs:deploy`: 文档更新发布
- `yarn run test`: 执行测试文件
- `lerna link`: 本地调试依赖包
- `lerna add moduleName --scope=@vv-desktop-web-core/atoms`: 为指定项目按照依赖
- `cd ./packages/atoms & yarn link`: 跨项目调试代码时候使用

## 调试的方法推荐

### 方法一

通过执行命令 `yarn run test` 运行测试代码进行调试

### 方法二

通过执行命令 `yarn start` 运行文档项目, 在浏览器端进行调试

### 方法三

把对应的包 `link` 到全局, 在目标项目中 `link` 对应包进行调试  
注意: 可以把 package.json 的 module 改成 './src/index.ts', 可以避免重复打包; (如果是 vite 打包模式, 记得删除业务项目 node_modules/.vite 目录; 重新运行项目;)  

## 文档撰写

项目文档基于 `dumi`, 会识别所有 `.md|x` 文件, 对应的标题和导航配置可以参考 [FrontMatter 文档](https://d.umijs.org/zh-CN/config/frontmatter)

## 组件库的部署

- 确保代码都提交并推送
- 本地构建项目 `build:all`
- 控制台使用 `lerna publish`, 或者使用 `npm run publish` 命令
- 如果流程没有问题但发布失败, 使用 `lerna publish from-package` 这个命令重新发布

## 在项目中如何使用?

1. 新建文件 `.npmrc` 并输入 `registry=http://127.0.0.1:4873`
2. 按照指定依赖 `yarn add @vv-desktop-web-core/atoms` 或者按照指定版本 `yarn add @vv-desktop-web-core/atoms@0.1.0`
3. 如果有更新可以使用 `yarn upgrade @vv-desktop-web-core/atoms` 来升级
4. 也可以使用 'latest' 版本号, 例如 `yarn add @vv-desktop-web-core/atoms@latest`, 使用 `@vv-desktop-web-core/atoms@latest` 来升级并更新依赖
5. 也可以执行 `yarn run upgradeCore` 来更新依赖库, 新的业务分支记得要提前修改次版本号
