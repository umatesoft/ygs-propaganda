// let service = 'dev'
// let service = 'Verif'
let service = 'prod'
let api = ''

if (service === 'dev') {
  // 开发
  api = 'http://192.168.0.127:8080/'
} else if (service === 'Verif') {
  // 验证
  api = 'http://10.20.5.1:20020'
} else if (service === 'prod') {
  // 生产
  api = 'http://219.239.236.198/vehshowcarapp/'
}

export default api
