import { fetch } from '@/utils/fetch'
// 获取首页图片
export function getVehicleInfo (params) {
  return fetch({
    url: '/umatesoft/guest/cms/banner/list',
    method: 'post',
    params
  })
}
// 获取新闻列表
export function getNewsList (params) {
  return fetch({
    url: '/umatesoft/guest/cms/news/list',
    method: 'post',
    params
  })
}
// 获取新闻列表详情
export function getNewsListDetail (params) {
  return fetch({
    url: '/umatesoft/guest/cms/news/queryById',
    method: 'post',
    params
  })
}
// 获取业务领域详情
export function getMessage (params) {
  return fetch({
    url: '/umatesoft/guest/cms/company/list',
    method: 'get',
    params
  })
}
// 获取关于我们下拉项
export function getAboutSelectList (params) {
  return fetch({
    url: '/umatesoft/guest/cms/channel/list',
    method: 'post',
    params
  })
}
// 获取项目案例
export function getsubitadd (params) {
  return fetch({
    url: '/umatesoft/guest/cms/custom/add',
    method: 'post',
    params
  })
}

// 获取项目案例
export function getsendcode (params) {
  return fetch({
    url: '/umatesoft/guest/cms/custom/getCode',
    method: 'post',
    params
  })
}