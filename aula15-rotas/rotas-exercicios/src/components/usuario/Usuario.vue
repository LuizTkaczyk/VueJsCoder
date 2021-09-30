<template>
  <div class="usuario">
     <h2>Usuários</h2>
     <hr>
     <!-- router view vinda de router.js, através do componente usuario -->
     <router-view ></router-view>
     <button sucesso @click="irParaInicio">Voltar</button>
  </div>

</template>

<script>
export default {
    
    methods: {
        irParaInicio(){
            // this.$router.push('/')
            //ou
            // this.$router.push({path:'/'})
            //ou usando uma rota nomeada
            this.$router.push({name:'inicio'})
        }
    },
}
</script>

<style>

</style>