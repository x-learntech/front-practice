export default (url: string): string => {
  let BASE_URL = ''
  // if (process.env.NODE_ENV === 'development') {
  //   // 开发模式
  //   BASE_URL = url.includes('/api/') ? '' : 'http://localhost:8801'
  // }
  return BASE_URL
}
