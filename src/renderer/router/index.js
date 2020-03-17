import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/page/Welcome').default
    },
    {
      path: '/send-message',
      name: 'send-message',
      component: require('@/page/SendMessage').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
