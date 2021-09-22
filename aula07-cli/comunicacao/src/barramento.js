//criando uma comunicação direta entre componentes filhos
import Vue from 'vue'

export default new Vue({
    methods:{
        alterarIdade(idade){
            this.$emit('idadeMudou', idade)
        },
        quandoIdadeMudar(callback){
            this.$on('idadeMudou', callback)
        }
    }
})