<template>
  <div class="citacoes">
    <Citacao>
      <!--será exibido em Citacao.vue, na tag slot (tudo que estiver dentro do corpo do componente será exibido em slot!)-->
      <h1 slot="autor">{{ citacoes[indice].autor }}</h1>
      <p slot="texto">{{ citacoes[indice].texto }}</p>
      <h6 slot="fonte">{{ citacoes[indice].fonte }}</h6>
    </Citacao>
    <span>
      <button @click="numero--">&lt;</button>
      <button @click="numero++">&gt;</button>
    </span>
  </div>
</template>

<script>
import Citacao from "./Citacao.vue";
export default {
  components: { Citacao },
  data() {
    return {
      numero: 0,
      citacoes: [
        {
          fonte: "Jornal do Empreendedor",
          texto:
            "Lembre-se sempre que você é absolutamente único. Assim como todos os outros.",
          autor: "Margaret Mead",
        },
        {
          fonte: "Frases de Mãe",
          texto: "Isso não é um quarto, é um chiqueiro.",
          autor: "Roberta",
        },
        {
          fonte: "Pensamento astuto",
          texto: "Não contavam com minha astúcia!",
          autor: "Chapolin",
        },
       
        {
          fonte: "Frase do dia",
          texto: "Todos os meus movimentos são friamente calculados.",
          autor: "Chapolin",
        },
        {
          fonte: "?????",
          texto: "Você não soube? Não te disseram? Não te contaram?",
          autor: "Chaves",
        },
      ],
    };
  },
  computed: {
    indice() {
    //   return Math.abs(this.numero % 3);
    return this.numero
    },
  },
};
</script>

<style scoped>
.citacoes {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
