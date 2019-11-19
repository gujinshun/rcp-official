import Vue from 'vue'
import Router from 'vue-router'
import home from './views/home.vue'
Vue.use(Router)

export default new Router({
  mode: 'hash',
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    }

  ]
})
