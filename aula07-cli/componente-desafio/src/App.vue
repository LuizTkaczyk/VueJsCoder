<template>
  <v-app>
    <Nav></Nav>
    <app-titulo></app-titulo>
    <app-content></app-content>
    <app-fotter></app-fotter>
  </v-app>
</template>

<script>
// O titulo foi importado globalmente, enquanto os demais foram localmente

// com o uso do @ , o caminho global é referenciado (caminho absoluto)
import Nav from "@/components/AppNavigation.vue";
import Content from "./components/AppContent.vue";
import Footer from "./components/AppFooter.vue";

export default {
  components: {
    appFotter: Footer, //pode-se tambem usar o padrão camelCase, assim não precisa usar aspas
    Nav, //ou pode usar o mesmo nome do componente
    "app-content": Content,
  },
};
</script>
