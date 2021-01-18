import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active_bg',
  routes: [
    {
      path: '/',
      name: '首页',
      component: resolve => require(['@/views/Home/index'], resolve)
    }
  ]
})
