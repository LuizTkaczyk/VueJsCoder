<template>
  <div class="contadores">
    <h1>Contadores</h1>
    <!-- usando v-for para repetir n de vezes -->
    <app-contador v-for="c in 3" :key="c"></app-contador>
  </div>
</template>

<script>
// Criando um componente local
import Contador from "./Contador.vue";
export default {
  // app-contador é a tag usada no App.vue para referanciar o componente criado
  components: { "app-contador": Contador },
};
</script>

<style scoped>
div {
  border: 1px solid red;
}
</style>