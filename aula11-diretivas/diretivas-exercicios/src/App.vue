<template>
  <div id="app">
    <h1>Diretivas</h1>
    <hr />
    <p v-text="'Usando uma diretiva v-text'"></p>
    <p v-html="'Usando diretiva <strong>HTML</strong>'"></p>
    <hr />
    <p>Diretiva global</p>
    <!-- Diretivas personalizadas definidas em main.js -->
    <!-- <p v-destaque>Diretiva personalizada</p> -->
    <p v-destaque="'red'">Diretiva personalizada</p>
    <p v-destaque:fundo.atrasar="'lightblue'">Diretiva personalizada</p>
    <hr />
    <p>Diretiva local</p>
    <p v-destaque-local:fundo.atrasar.alternar="'lightblue'">Diretiva personalizada</p>
    <p v-destaque-local="'red'">Diretiva personalizada</p>
  </div>
</template>

<script>
export default {
  // Criando uma diretiva local
  directives: {
    "destaque-local": {
      bind(el, binding, vnode) {
        const aplicarCor = (cor) => {
          if (binding.arg === "fundo") {
            el.style.backgroundColor = cor;
          } else {
            el.style.color = cor;
          }
        };
        let atraso = 0;

        if (binding.modifiers["atrasar"]) atraso = 2000;

        const cor1 = binding.value;
        const cor2 = "purple";
        let corAtual = setTimeout(() => {
          if (binding.modifiers["alternar"]) {
            setInterval(() => {
              corAtual = corAtual === cor1 ? cor2 : cor1;
              aplicarCor(corAtual);
            }, 200);
          } else {
            aplicarCor(binding.value);
          }
        }, atraso);
      },
    },
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
</style>
