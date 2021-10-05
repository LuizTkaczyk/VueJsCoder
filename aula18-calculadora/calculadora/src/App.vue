<template>
  <div id="app">
    <h1>Calculadora Bolada</h1>
    <Calculator></Calculator>
  </div>
</template>

<script>
import Calculator from './main/Calculator.vue'

export default {
  components: {Calculator},
};
</script>

<style>
@font-face {
  font-family: "RobotoMono";
  src: url("./fonts/RobotoMono-Thin.ttf");
}
*{
  font-family: "RobotoMono", monospace;
}
body {
  margin: 0;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  background: linear-gradient(to right, #fffbd5, #b20a2c);
}
</style>
