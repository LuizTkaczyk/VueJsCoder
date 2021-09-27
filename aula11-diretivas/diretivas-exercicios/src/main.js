import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//Criando uma diretiva personalizada
Vue.directive('destaque', {
	bind(el, binding, vnode) {
		let atraso = 0
		if (binding.modifiers['atrasar']) atraso = 3000

		setTimeout(() => {
			if (binding.arg === 'fundo') {
				el.style.backgroundColor = binding.value
			} else {
				el.style.color = binding.value
			}

		}, atraso)
		
		//Alterand a cor de fundo com uma diretiva personalizada
		//el.style.backgroundColor='yellow'
		//****************************************************************************************** */

		//Alterando a cor de fundo, passando o valor diretamente na diretiva usada


	}
})


new Vue({
	render: h => h(App),
}).$mount('#app')
