// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
import App from './App'
import router from './router'
// mqs  --start
// import VueAwesomeSwiper from 'vue-awesome-swiper'
import '@/assets/reset.css'
// import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'babel-polyfill'
import promise from 'es6-promise'

promise.polyfill()
// Vue.use(ElementUI)
require('swiper/dist/css/swiper.css')

// Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})