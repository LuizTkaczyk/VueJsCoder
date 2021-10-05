<template>
  <div>
    <h1 class="display-3 font-weight-light mb-4">
      Negocie e consulte suas ações
    </h1>
    <v-sheet class="pa-2 primary" :elevation="6">
      <v-icon class="yellow--text mr-3">info</v-icon>
      <span>Você pode salvar e carregar os dados</span>
    </v-sheet>

    <v-sheet class="pa-2 success mt-3 rounded-pill" :elevation="6">
      <v-icon class="yellow--text mr-3">info</v-icon>
      <span>Clique em "Finalizar dia" para iniciar um novo dia!</span>
    </v-sheet>

    <v-divider class="my-4"></v-divider>
    <p><strong>Seu saldo</strong>{{ funds | currency }}</p>
  </div>
</template>

<script>
export default {
  computed :{
    funds(){
      return this.$store.getters.funds
    }
  }
};
</script>

<style>
</style>