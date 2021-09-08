new Vue({
    el: '#desafio',
    data: {
        valor: 0
    },
    methods: {
        
    },
    computed:{
        //ao usar o computed não se usa o () na chamada da função
        resultado(){
            return this.valor == 37 ? 'Valor Igual' : 'Valor diferente'
        }
    },
    watch:{//monitorando a mudança de resultado, ou seja, somente quando o resultado for true ( 37) essa chamada watch é executada
        resultado(){
            setTimeout(()=>{
                this.valor = 0
            },5000)
        }
    }
});