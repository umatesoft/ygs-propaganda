import axios from 'axios'

export function fetch (options) {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      header: {
        'Content-Type': 'application/json'
      },
      baseURL: process.env.BASE_API,
      setTimeout: 30 * 1000 // 30秒超时
    })
    instance(options).then(response => {
      resolve(response)
    })
  })
}
