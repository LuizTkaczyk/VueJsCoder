<template>
  <div id="app">
    <h1>Problema de Monty Hall</h1>
    <Door number="1" :hasGift="false"></Door>
  </div>
</template>

<script>
import Door from "./components/Door";

export default {
  components: { Door },
};
</script>

<style>
* {
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
}

body {
  color: white;
  background: linear-gradient(to right, #0f2027, #203a43, #2c5364);
}

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#app h1 {
  border: 1px solid rgba(0, 0, 0, 0.493);
  background-color: rgba(0, 0, 0, 0.527);
  padding: 20px;
  margin-bottom: 60px;
}
</style>
