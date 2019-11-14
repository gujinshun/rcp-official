import Vue from 'vue'
import Router from 'vue-router'
import home from './views/home.vue'
import home2 from './views/home2.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/home2',
      name: 'home2',
      component: home2
    },

  ]
})
