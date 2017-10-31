import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const CinemaListings = r => require.ensure([], () => r(require('@/components/CinemaListings')))

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'cinema',
      component: CinemaListings
    }
  ]
})

export default router
