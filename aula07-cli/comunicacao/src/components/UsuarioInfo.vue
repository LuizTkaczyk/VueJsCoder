<!-- ESTE É UM COMPONENTE FILHO DE Usuario.vue -->

<template>
  <div class="componente">
    <h2>As Informações de Usuário</h2>
    <p>Vários detalhes...</p>
    <p>
      Nome do usuário: <strong>{{ inverterNome() }}</strong>

    </p>
    <button @click="reiniciarNome()">Reiniciar nome</button>
    <button @click="reiniciarFn()">Reiniciar nome "CallBack"</button>
  </div>
</template>

<script>
export default {
  //definindo propriedades, a propriedade nome está vindo de Usuario.vue (componente pai), também pode se ter funções em props
  props: {
      nome:{
          type:String,
          //required:true,
          default:'Nome não localizado'


        //   default: function(){
        //       return Array(10).fill(0).join(',')
        //   }

      },
      reiniciarFn: Function
  },
  methods: {
      inverterNome(){
        //   acessando a propriedade 'nome' declarada em props
          return this.nome.split('').reverse().join('')
      },
      reiniciarNome(){
          this.nome="Luiz Antonio"
          this.$emit('nomeAlterado', this.nome) //Evento enviado ao componente pai
      }
  },
};
</script>

<style scoped>
.componente {
  flex: 1;
  background-color: #ec485f;
  color: #fff;
}
</style>
