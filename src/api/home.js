import { fetch } from '@/utils/fetch'
import axios from 'axios';
// 获取首页图片
export function getAdd (params) {
  return fetch({
    url: '/umatesoft/companyConsultInfo/add',
    method: 'post',
    data: params
  })
}

export function postAction(url, parameter) {
  return axios({
    headers: {
      'Content-Type': 'application/json',
    },
    url: '' + url,
    method:'POST' ,
    data: parameter
  });
};