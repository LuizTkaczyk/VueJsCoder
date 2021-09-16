<template>
  <div id="app">
    
  <button @click="titulo += '#' ">Alterar</button>
{{titulo}}
 </div>
  
</template>

<script>
export default {
  data() {
    return {
      titulo: "Teste de data usando o Vue",
    };
  },
};
</script>

<style>
#app {
  background-color: rgb(144, 144, 145);
  color: white;
  font-size: 30pt;
}
</style>
