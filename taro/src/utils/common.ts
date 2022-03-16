import { getCurrentPages, navigateTo } from '@tarojs/taro';

/*获取当前页url*/
export const getCurrentPageUrl = (): string => {
  let pages = getCurrentPages()
  let currentPage = pages[pages.length - 1]
  let url = currentPage.route
  return url
}

export const pageToLogin = (): void => {
  let path = getCurrentPageUrl()
  if (!path.includes('login')) {
    navigateTo({
      url: '/pages/login/index',
    })
  }
}
