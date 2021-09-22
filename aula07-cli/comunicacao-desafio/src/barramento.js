import Vue from 'vue'
export default new Vue({
    methods: {
        selecionaUsuario(usuario){
            this.$emit('usuarioSelecionado', usuario)
        },
        onUsuarioSelecionado(callback){
            this.$on('usuarioSelecionado', callback)
        }
    },
})