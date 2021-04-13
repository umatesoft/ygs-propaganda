'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./sit.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  ENV_CONFIG: '"pre"',
  BASE_API: '"http://123.57.52.118:9009/"' //佳佳
  // BASE_API: '"http://192.168.3.88:9009/"' //佳佳
})
