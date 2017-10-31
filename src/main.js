// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueI18n from 'vue-i18n'
import vSelect from 'vue-select'
import Vue2Filters from 'vue2-filters'
import { store } from './store/store'
import { locales } from './locales/locales'

Vue.config.productionTip = false

/* Installation. */
Vue.use(VueI18n)
Vue.use(Vue2Filters)

var i18n = new VueI18n({
  locale: 'es',
  // navigator.language.slice(0, 2),
  messages: locales,
  fallbackLocale: 'es'
  // 'en'
})

/* Global components. */
Vue.component('v-select', vSelect)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  template: '<App/>',
  components: { App }
})
