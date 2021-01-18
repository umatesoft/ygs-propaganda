import {
  fetch
} from './fetch'
// import api from './url'

// 获取首页图片
export function getVehicleInfo (params) {
  return fetch({
    url: '/jeecg-boot/cms/guest/list',
    method: 'post',
    params
  })
}

// export function getVehicleInfo (params) {
//   return fetch({
//     url: process.env.BASE_API + '/veh/app/vehsrcinfapp/getById.do',
//     method: 'get',
//     params
//   })
// }
