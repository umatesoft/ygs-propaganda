'use strict'
const merge = require('webpack-merge')
const devEnv = require('./dev.env')

// 开发环境
module.exports = merge(devEnv, {
  NODE_ENV: '"production"',
  ENV_CONFIG: '"sit"',
  // BASE_API: '"http://192.168.1.5:8080/"'
  // BASE_API: '"http://101.201.149.136:8080/"' // 开发环境
  BASE_API: '"http://123.57.52.118:9009/"' //佳佳 
})
