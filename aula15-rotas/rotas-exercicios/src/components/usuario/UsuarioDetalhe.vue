<template>
  <div class="usuario-detalhe">
    <h3>Usuário detalhes</h3>
    <hr />
    <!-- propriedade sucesso do css! -->
    <p><strong>Código:</strong>{{ id }}</p>
    <!-- <router-link
      tag="button"
      primario
      :to="`/usuario/${$route.params.id}/editar`"
      >Editar comum</router-link
    >
    <hr /> -->
    <!-- Usando uma rota nomeada / passando valores via query-->
    <router-link
      tag="button"
      primario
      :to="{ name: 'editarUsuario', params: { id }, query:{completo:true, lingua:'pt'}, hash:'#rodape' }"
      >Editar 2</router-link
    >
  </div>
</template>

<script>
export default {
  //props vinda de router.js do path usuario/:id
  props: ["id"],
  beforeRouteEnter (to, from, next) {
    console.log('Dentro do componente usuarioDetalhe')
    next()
  }

  // data() {
  //     return {
  //         //não é router , e sim route
  //         id: this.$route.params.id
  //     }
  // },
  // //alterando corretamente o código:id ao clicar em cada usuário com o watch
  // watch:{
  //     $route(to, from){
  //         this.id = to.params.id
  //     }

  // },
};
</script>

<style>
</style>