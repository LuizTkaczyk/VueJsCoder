new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        alerta() {
            alert('Clicou no botão!')
        },
        texto(event) {
            this.valor = event.target.value
        }
    },
})