import Vue from 'vue'
import Vuex from 'vuex'

import carrinho from './modules/carrinho'
import parametros from './modules/parametros'

//importando todos de getters
import * as getters from './getters'

Vue.use(Vuex)

//parametros vindos de modules
export default new Vuex.Store({
    // getters vindos de getters.js
    state:{
        nome: 'Luiz Antonio',
        sobrenome: 'Tkaczyk dos Santos'
    },
    getters,
    modules:{ carrinho, parametros}
    
})