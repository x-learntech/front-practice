import { defineConfig } from 'father';
// https://github.com/umijs/father/blob/master/docs/config.md
export default defineConfig({
  // 以下为 esm 配置项
  esm: {
    input: 'src', // 默认编译目录
    output: 'es', // 构建输出目录
    platform: 'browser', // 默认构建为 Browser 环境的产物
    transformer: 'babel', // 默认使用 babel 以提供更好的兼容性
  },
  // 以下为 cjs 配置项
  cjs: {
    input: 'src', // 默认编译目录
    output: 'lib', // 构建输出目录
    platform: 'node', // 默认构建为 Node.js 环境的产物
    transformer: 'esbuild', // 默认使用 esbuild 以获得更快的构建速度
  },
  prebundle: {
    deps: [], // 需要预打包的依赖包名，需要安装在 `devDependencies` 中
    output: 'compiled', // 默认输出目录，有自定义需求时才需配置
  }
});
