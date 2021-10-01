<template>
  <Painel titulo="Resumo" roxo>
    <div class="resumo">
      <span
        >Total: <strong>{{ total | dinheiro }}</strong></span
      >
      <hr />
      <button>Finalizar!</button>
    </div>
  </Painel>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: mapGetters({
    total: "valorTotal", //valorTotal está vindo de store.js
  }),

  //computed:mapGetters(['valorTotal'])
  //   computed: {
  //     total() {
  //       //acessando o metodo que realiza a soma total dos valores em store.js
  //       return this.$store.getters.valorTotal;
  //     },
  //   },
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
</style>
