<template>
<!-- escondendo o menu da aplicação com uma css -->
  <div id="app" :class="{ 'hide-menu': !isMenuVisible}">
    <Header title="Cod3r - Projeto 2" :hideToggle="false" :hideUserDropdown="false"></Header>
    <Menu></Menu>
    <Content></Content>
    <Footer></Footer>
  </div>
</template>

<script>

import { mapState} from 'vuex'
import Header from "./components/template/Header.vue";
import Menu from "./components/template/Menu.vue";
import Footer from "./components/template/Footer.vue";
import Content from "./components/template/Content.vue";

export default {
  name: "App",

  components: { Header, Menu, Footer, Content },
  computed:mapState(['isMenuVisible'])
};
</script>

<style>
* {
  font-family: "Lato", sans-serif;
}

body {
  margin: 0;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: graycale;

  height: 100vh;
  display: grid;
  grid-template-rows: 60px 1fr 40px;
  grid-template-columns: 300px 1fr;
  grid-template-areas: "header header" "menu content" "menu footer";
}

/* escondendo o menu */
#app.hide-menu{
	grid-template-areas: "header header" "content content " "footer footer";
}
</style>