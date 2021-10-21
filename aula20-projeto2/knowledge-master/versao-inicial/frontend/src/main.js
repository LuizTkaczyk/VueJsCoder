import Vue from 'vue'
import 'font-awesome/css/font-awesome.css'
import store from './config/store'
import './config/bootstrap'

import App from './App'

import router from './config/router'

Vue.config.productionTip = false

//Token temporario
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NCwibmFtZSI6Imx1aXoiLCJlbWFpbCI6Imx1aXpAbHVpei5jb20iLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNjM0NzcyOTc4LCJleHAiOjE2MzUwMzIxNzh9.P6CikTgRE4PswxaoB9YHnDyLn5n8NYyTcUm0-NE9yOo'

new Vue({
  router,
  store, 
  render: h => h(App)
}).$mount('#app')