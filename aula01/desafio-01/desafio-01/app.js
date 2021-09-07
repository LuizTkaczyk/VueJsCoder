new Vue({
    el:'#desafio',
    data:{
        nome:'Luiz Antonio T.S.',
        idade:32,
        imagem: 'img/snoppy.png'
    },
    methods: {
        multipIdade(){
           return this.idade * 3
        },
        randomNum(){
           return Math.random().toFixed(1) * 10
            
        },
       
    },
})