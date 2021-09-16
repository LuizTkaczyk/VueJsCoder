<template>
  <div class="contadores">
       <h1>Contadores</h1>
      <app-contador v-for="c in 3" :key="c"></app-contador>
  </div>
</template>

<script>
// Criando um componente local
import Contador from "./Contador.vue";
export default {
  components: { "app-contador": Contador },
};
</script>

<style>
</style>