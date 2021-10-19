//area de armazenamento entre os componentes (uma comunicação entre dos componentes com o VUEX)
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        isMenuVisible: true,
        user:{
            name: 'Usuario Mock',
            email:'mock@luiz.com.br'
        }
    },
    mutations:{
        toggleMenu(state, isVisible){
            if(isVisible === undefined){
                state.isMenuVisible = !state.isMenuVisible
            }else{
                state.isMenuVisible = isVisible
            }
            
        }
    }
})
