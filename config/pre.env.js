'use strict'
const merge = require('webpack-merge')
const devEnv = require('./dev.env')

module.exports = merge(devEnv, {
  NODE_ENV: '"production"',
  ENV_CONFIG: '"pre"',
  BASE_API: '"http://123.57.52.118:9009/"' //佳佳
})
