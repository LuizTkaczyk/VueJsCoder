import Vue from 'vue'
import 'font-awesome/css/font-awesome.css'
import store from './config/store'

import App from './App'

Vue.config.productionTip = false

new Vue({
  store, 
  render: h => h(App)
}).$mount('#app')