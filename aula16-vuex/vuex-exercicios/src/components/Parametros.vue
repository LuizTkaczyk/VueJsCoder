<template>
  <Painel titulo="Parâmetros" vermelho>
    <div class="parametros">
      <span>
        <strong>Quantidade Padrão: </strong>
        <input type="number" v-model="quantidade" />
      </span>
      <span>
        <strong>Preço Padrão: </strong>
        <input type="number" v-model="preco" />
      </span>
    </div>
  </Painel>
</template>

<script>
export default {
  //propriedades computadas apenas recebem valores!!!!!!!!!!!!!!!!!!!
  computed: {
    quantidade: {
      get() {
        return this.$store.state.parametros.quantidade;  //acessando parametros vindos de modules
      },
      set(valor) {
        this.$store.commit("setQuantidade", valor);
      },
    },
    preco:{
        get(){
            return this.$store.state.parametros.preco //acessando parametros vindos de modules
        },
        set(valor){
            this.$store.commit('setPreco', valor)
        }
    }
  },
};
</script>

<style>
.parametros {
  display: flex;
  justify-content: space-around;
}
</style>
