import Vue from 'vue'
export default Vue({
    methods: {
        selecionaUsuario(nome){
            this.$emit('nomeUsers', nome)
        }
    },
})