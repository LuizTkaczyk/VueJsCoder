//importando o axios e obtendo dados do banco de dados criado no firebse
import Vue from 'vue'
import axios from 'axios'

//url do banco de dados do firebase, definido de forma global
axios.defaults.baseURL = 'https://curso-vue-9320c-default-rtdb.firebaseio.com/'
axios.defaults.headers.common['Autorization'] = 'abc123'
axios.defaults.headers.get['Accepts']  ='application/json'

//acessando os métodos do axios de forma global com $http
Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios

        // Mostrando no console se o método é get ou post
        Vue.prototype.$http.interceptors.request.use(configuracao => {
            console.log(configuracao.method)
            return configuracao
        }, error => Promise.reject(error))

        Vue.prototype.$http.interceptors.response.use(resposta => {
            // const array = []
            // for (let chave in resposta.data) {
            //     array.push({ id: chave, ...resposta.data[chave] })
            // }
            //resposta.data = array
            return resposta

        }, error => Promise.reject(error))
    }
})