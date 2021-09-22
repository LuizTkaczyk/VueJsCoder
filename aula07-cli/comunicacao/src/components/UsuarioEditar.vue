<template>
  <div class="componente">
    <h2>Alterar os Dados de Usuário (este é um componente filho)</h2>
    <p>Edite as informações</p>
    <p>
      Idade do usuário <strong>{{ idade }}</strong>
    </p>
    <button @click="alterarIdade">Alterar idade</button>
  </div>
</template>

<script>
import barramento from "@/barramento";

export default {
  props: {
    idade: Number,
  },
  methods: {
    alterarIdade() {
      this.idade += Math.random().toFixed(1) * 10;

      barramento.alterarIdade(this.idade); //passando a propriedade alterarIdade para o componente pai (Usuario.vue)
    },
  },
};
</script>

<style scoped>
.componente {
  flex: 1;
  background-color: #98b99a;
  color: #fff;
}
</style>
