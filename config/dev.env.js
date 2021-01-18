'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./sit.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"'
})
