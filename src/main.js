// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vSelect from 'vue-select'
import Vue2Filters from 'vue2-filters'
import { store } from './store/store'

Vue.config.productionTip = false

/* Installation. */
Vue.use(Vue2Filters)

/* Global components. */
Vue.component('v-select', vSelect)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
