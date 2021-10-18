<template>
  <div id="app">
    <Header title="Cod3r - Projeto 2" :hideToggle="false"></Header>
    <Menu></Menu>
    <Content></Content>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/template/Header.vue";
import Menu from "./components/template/Menu.vue";
import Footer from "./components/template/Footer.vue";
import Content from "./components/template/Content.vue";

export default {
  components: { Header, Menu, Footer, Content },
  name: "App",
};
</script>

<style>

*{
	font-family: "Lato", sans-serif;

}

body{
	margin: 0;

}

#app{
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: graycale;

	height: 100vh;
	display: grid;
	grid-template-rows: 60px 1fr 40px;
	grid-template-columns: 300px 1fr;
	grid-template-areas: "header header" "menu content"  "menu footer";
}
</style>