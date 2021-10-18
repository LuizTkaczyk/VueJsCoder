//area de armazenamento entre os componentes (uma comunicação entre dos componentes)
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        isMenuVisible: true
    },
    mutations:{
        toggleMenu(state, isVisible){
            if(isVisible === undefined){
                state.isMenuVisible = !state.isMenuVisible
            }else{
                state.isMenuVisible = isVisible
            }
            console.log('toggle munu = ' + state.isMenuVisible)
        }
    }
})
