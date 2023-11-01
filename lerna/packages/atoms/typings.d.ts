declare module '*.css';
declare module '*.less';
declare module '*.module.less' {
  const styles: Record<string, string>
  export default styles
}
declare module '*.png';
