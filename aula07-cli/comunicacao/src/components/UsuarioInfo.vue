<!-- ESTE É UM COMPONENTE FILHO DE Usuario.vue -->

<template>
  <div class="componente">
    <h2>As Informações de Usuário (esse é um componente filho)</h2>
    <p>Vários detalhes...</p>
    <p>
      Nome do usuário: <strong>{{ inverterNome() }}</strong>


    </p>

    <p>Idade do usuário <strong>{{idade}}</strong></p>
    <button @click="reiniciarNome()">Reiniciar nome</button>
    <button @click="reiniciarFn()">Reiniciar nome "CallBack"</button> <!-- callback chamada do componente pai-->
  </div>
</template>

<script>
import barramento from '@/barramento'
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
      reiniciarFn: Function,
      idade:Number  
  },
  methods: {
      inverterNome(){
        //   acessando a propriedade 'nome' declarada em props
          return this.nome.split('').reverse().join('')
      },
      reiniciarNome(){
          this.nome="Luiz Antonio"
          this.$emit('nomeAlterado', this.nome) //Evento enviado ao componente pai (Usuario.vue)
      }
  },
 //se comunicando com o UsuarioEditar via barramento, sem passar pelo elemento pai
  created() {
      barramento.quandoIdadeMudar(idade=>{
          this.idade = idade
      })
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
