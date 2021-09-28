<template>
  <div id="app">
    <h1>Filtros & Mixins</h1>
    <hr />
    <!-- Mixin importado de usuarioMixin.js -->
    <p>{{ usuarioLogado }}</p>
    <p>{{ cpf | cpfFilter | inverterFilter }}</p>
    <!-- FILTRO DO CPF NO INPUT (v-model não suporta)-->
    <input type="text" :value="cpf | cpfFilter" />
    <hr />
    <frutas></frutas>
    <hr />
    <div>
      <ul>
        <li v-for="fruta in frutas" :key="fruta">{{ fruta }}</li>
      </ul>
      <input type="text" v-model="fruta" @keydown.enter="add" />
    </div>
  </div>
</template>

<script>
import usuarioMixin from "./usuarioMixin";
import FrutasMixin from "./FrutasMixin";
import Frutas from "./Frutas.vue";
export default {
  components: { Frutas },
  mixins: [FrutasMixin, usuarioMixin],
  //declarando um filtro localmente de cpf
  filters: {
    cpfFilter(valor) {
      const arr = valor.split("");
      arr.splice(3, 0, ".");
      arr.splice(7, 0, ".");
      arr.splice(11, 0, "-");
      return arr.join("");
    },
  },
  data() {
    return {
      cpf: "69852374158",
    };
  },
  created() {
    console.log("created - App.js");
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 2.5rem;
}
input {
  font-size: 2.5rem;
}
</style>
