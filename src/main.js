// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueI18n from 'vue-i18n'
import Vue2Filters from 'vue2-filters'
import VueProgressiveImage from 'vue-progressive-image'
import VueProgressBar from 'vue-progressbar'
import { store } from './store/store'
import { locales } from './locales/locales'

Vue.config.productionTip = false

const options = {
  color: '#4A90E2',
  failedColor: '#FFCD00',
  thickness: '4px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  }
}

/* Installation. */
Vue.use(VueI18n)
Vue.use(Vue2Filters)
Vue.use(VueProgressiveImage)
Vue.use(VueProgressBar, options)

var i18n = new VueI18n({
  locale: 'es',
  // navigator.language.slice(0, 2),
  messages: locales,
  fallbackLocale: 'es'
  // 'en'
})

/* Global components. */

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  template: '<App/>',
  components: { App }
})
