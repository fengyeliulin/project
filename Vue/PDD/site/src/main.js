import Vue from 'vue'
import App from './App.vue'
import store from './store'

import router from './router'
import lyTab from 'ly-tab'
Vue.use(lyTab)

Vue.config.productionTip = false

new Vue({
  router,
  lyTab,
  store,
  render: h => h(App),
}).$mount('#app')
