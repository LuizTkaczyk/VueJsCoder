import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'

//importando o router
import router from './router'
import store from '@/store/store'

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')
