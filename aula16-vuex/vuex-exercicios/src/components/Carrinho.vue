<template>
  <Painel titulo="Carrinho" azul :notificacao="produtos.length">
    <div class="carrinho">
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Qtde</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="produto in produtos" :key="produto.nome">
            <td>{{ produto.nome }}</td>
            <td>{{ produto.quantidade }}</td>
            <td>{{ produto.preco | dinheiro }}</td>
          </tr>
        </tbody>
      </table>
      <hr />
      <div class="total">
        <span
          >Total: <strong>{{ total | dinheiro }}</strong></span
        >
      </div>
    </div>
  </Painel>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    //precisa usar o spread pois existem outras propriedades computadas!!
    ...mapGetters('carrinho',{
      total: "valorTotal",
    }),

    // total() {
    //     //acessando o metodo que realiza a soma total dos valores em store.js
    //    return this.$store.getters.valorTotal
    // },
    produtos() {
      return this.$store.state.carrinho.produtos; //acessando carrinho vindos de modules
    },
  },
};
</script>

<style>
table {
  width: 100%;
}

td {
  border-top: 1px solid #eee;
  width: 33%;
}

hr {
  margin-top: 30px;
}

.total {
  display: flex;
  justify-content: flex-end;
}
</style>
