<template>
  <div id="app" class="container">
    <h1>HTTP com Axios</h1>
    <b-card>
      <b-form-group label="Nome:">
        <b-form-input
          type="text"
          size="lg"
          v-model="usuario.nome"
          placeholder="Informe o nome"
        ></b-form-input>
      </b-form-group>
      <b-form-group label="Email:">
        <b-form-input
          type="email"
          size="lg"
          v-model="usuario.email"
          placeholder="Informe o email"
        ></b-form-input>
      </b-form-group>
      <hr />
      <b-button @click="salvar" size="lg" variant="primary">Salvar</b-button>
      <b-button @click="obterUsuarios" size="lg" variant="success" class="ml-2"
        >Obter usuários</b-button
      >
    </b-card>
    <hr />
    <!-- Listando os usuarios obtidos do banco de dados -->
    <b-list-group>
      <b-list-group-item v-for="(usuario, id) in usuarios" :key="id">
        <strong>Nome:</strong>{{ usuario.nome }}<br />
        <strong>E-mail:</strong>{{ usuario.email }}<br />
        <strong>ID:</strong>{{ id }}<br />
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  // created(){
  // 	this.$http.post('usuarios.json',{
  // 		nome:'Luiz',
  // 		email:'luiz@antonio.com'
  // 	}).then(resposta => console.log(resposta))
  // }
  data() {
    return {
      usuarios: [],
      usuario: {
        nome: "",
        email: "",
      },
    };
  },
  methods: {
    //salva no banco de dados e depois limpa os campos do formulário
    salvar() {
      this.$http.post("usuarios.json", this.usuario).then((resposta) => {
        this.usuario.nome = "";
        this.usuario.email = "";
      });
    },
    //no caso de pegar os dados do banco de dados o .get não é obrigatorio
    obterUsuarios() {
      this.$http.get("usuarios.json").then((resposta) => {
        this.usuarios = resposta.data;
		//console.log(resposta.data)
      });
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 1.5rem;
}

#app h1 {
  text-align: center;
  margin: 50px;
}
</style>
