import Vue from 'vue'
import 'font-awesome/css/font-awesome.css'
import store from './config/store'
import './config/bootstrap'

import App from './App'

import router from './config/router'

import './config/msgs'

Vue.config.productionTip = false

new Vue({
  router,
  store, 
  render: h => h(App)
}).$mount('#app')