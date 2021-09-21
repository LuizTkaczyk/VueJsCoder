import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import Titulo from './components/AppTitulo'


Vue.config.productionTip = false
Vue.component('app-titulo', Titulo)



new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
