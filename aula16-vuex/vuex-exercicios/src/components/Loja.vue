<template>
  <Painel titulo="Loja Virtual" verde>
    <div class="loja">
      <span>Adicionar</span>
      <input type="number" v-model.number="quantidade" />
      <span>itens de <strong>R$</strong></span>
      <input type="number" v-model.number="preco" />
      <button @click="adicionar">Agora!</button>
    </div>
  </Painel>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      sequencia: 1,
    };
  },
  computed: {
    quantidade: {
      get() {
        return this.$store.state.parametros.quantidade;
      },
      set(valor) {
        this.$store.commit("setQuantidade", valor);
      },
    },
    preco: {
      get() {
        return this.$store.state.parametros.preco;
      },
      set(valor) {
        this.$store.commit("setPreco", valor);
      },
    },
  },
  methods: {
    ...mapActions("carrinho", ["adicionarProduto"]), //vindo de store.js /namespaced carrinho sendo usado
    adicionar() {
      const produto = {
        id: this.sequencia,
        nome: `Produto ${this.sequencia}`,
        quantidade: this.quantidade,
        preco: this.preco,
      };
      this.sequencia++;
      //this.$store.state.produtos.push(produto)

      //usando a função adicionarProduto vinda de store.js para adicionar produtos
      //this.$store.commit('adicionarProduto', produto)
      //this.adicionarProduto(produto)
      this.adicionarProduto(produto);

      //exemplos vindos de getters.js
      //    console.log(this.$store.getters.getNome)
      //    console.log(this.$store.getters.getNomeCompleto)
    },
  },
};
</script>

<style>
.loja {
  display: flex;
  justify-content: center;
}

.loja > * {
  margin: 0px 10px;
}

input {
  font-size: 2rem;
  width: 90px;
}
</style>
