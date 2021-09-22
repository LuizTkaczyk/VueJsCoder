<!--ESTE É O COMPONENTE PAI -->

<template>
  <div class="container">
    <h1>Componente Usuário (este é um componente pai)</h1>
    <p>Esse é um componente muito legal!</p>
    <p>
      Nome é <strong>{{ nome }}</strong>
    </p>
    <p>Idade é : {{ idade }}</p>
    <button @click="alterarNome">Alterar nome</button>
    <hr />
    <div class="componentes">
      <app-usuario-info
        :nome="nome"
        :idade='idade'
        @nomeAlterado="nome = $event"
        :reiniciarFn="reiniciarNome"
      />
      <app-usuario-editar 
      :idade='idade' 
      
      /> <!--Captando o valor do elemento filho UsuarioEditar.vue, e atualizando os outros elementos filhos |-->
    </div>
  </div>
</template>

<script>
import AppUsuarioInfo from "./UsuarioInfo";
import AppUsuarioEditar from "./UsuarioEditar";

export default {
  components: { AppUsuarioInfo, AppUsuarioEditar },
  data() {
    return {
      nome: "Luiz",
      idade: 32,
    };
  },
  methods: {
    alterarNome() {
      this.nome = "Martineli";
    },
    //Criando uma callback para reiniciar o nome
    reiniciarNome() {
      this.nome = "Antonio Luiz";
    },
  },
};
</script>

<style scoped>
.container {
  background-color: #27363b;
  color: #fff;
  padding: 10px;
}

.container hr {
  margin: 20px 10px;
}

.componentes {
  display: flex;
}

.componentes > * {
  margin: 10px;
}
</style>
