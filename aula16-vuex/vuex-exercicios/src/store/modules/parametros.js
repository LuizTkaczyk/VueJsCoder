export default {
    state: {

        quantidade: 2,
        preco: 13.92

    },
    mutations: {//ou set

        setQuantidade(state, payload) {
            state.quantidade = payload
        },
        setPreco(state, payload) {
            state.preco = payload
        }
    },

}