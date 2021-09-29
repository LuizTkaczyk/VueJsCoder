<template>
  <div id="app" class="container-fluid">
    <h1>Animações</h1>

    <hr />
    <b-button variant="primary" class="mb-4" @click="exibir = !exibir"
      >Mostrar mensagem</b-button
    >

    <!-- appear para carregar a animação logo que a página for aberta -->
    <!-- <transition name="fade" appear="">
      <b-alert variant="info" show v-if="exibir">{{ msg }}</b-alert>
    </transition>

    <transition name="slide" appear="">
      <b-alert variant="info" show v-show="exibir">{{ msg }}</b-alert>
    </transition>
    <hr />
    <transition
      enter-active-class="animated animate__backInDown"
      leave-active-class="animated animate__backOutDown "
    >
      <b-alert variant="info" show v-show="exibir">{{ msg }}</b-alert>
    </transition>
    
	<hr/> -->
    <!-- Escolhendo o tipo de animação -->
    <b-select v-model="tipoAnimacao" class="mb-4">
      <option value="fade">Fade</option>
      <option value="slide">Slide</option>
    </b-select>
    <transition :name="tipoAnimacao" mode="out-in">
      <b-alert variant="info" show v-if="exibir" key="info">{{ msg }}</b-alert>
      <b-alert variant="warning" show v-else key="warn">{{ msg }}</b-alert>
    </transition>
    <hr />
    <b-button @click="exibir2 = !exibir2" variant="primary">Mostrar</b-button>
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-Enter="afterEnter"
      @enter-cancelled="enterCancelled"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      @leave-cancelled="leaveCancelled"
    >
      <div v-if="exibir2" class="caixa"></div>
    </transition>
    <hr />
    <div class="mb-4">
      <b-button
        variant="primary"
        @click="componenteSelecionado = 'AlertaInfo'"
        class="mr-2"
        >informação</b-button
      >
      <b-button
        variant="secondary"
        @click="componenteSelecionado = 'AlertaAdvertencia'"
        >Advertencia</b-button
      >
    </div>
    <transition name="fade" mode="out-in">
    <component :is="componenteSelecionado"></component>
    </transition>
    <hr>

    <b-button @click="adicionarAlunos" >Adicionar alunos</b-button>

    <transition-group name="slide" tag="div">
     <b-list-group v-for="(aluno,i) in alunos" :key="aluno" >
        <b-list-group-item class="" >{{aluno}} <b-button @click="removerAlunos(i)">Excluir</b-button></b-list-group-item>
    </b-list-group>
    </transition-group>

   
    
  </div>
</template>

<script>
import AlertaAdvertencia from "./AlertaAdvertencia.vue";
import AlertaInfo from "./AlertaInfo.vue";
export default {
  components: { AlertaAdvertencia, AlertaInfo },
  data() {
    return {
      msg: "Uma mensagem de informação para o usuário!",
      exibir: false, //true para a animação aparecer logo ao carregar a página
      tipoAnimacao: "fade",
      exibir2: true,
      larguraBase: 0,
      componenteSelecionado: "AlertaInfo",
      alunos:['Luiz', 'Antonio', 'Marta', 'Franciso', 'Ivonete']
    };
  },
  methods: {
    adicionarAlunos(){
      const s = Math.random().toString(36).substring(2)
      this.alunos.push(s)
    },
    removerAlunos(indice){
      //removendo um da lista (indice se refere a 'i'  de alunos em b-list-group)
      this.alunos.splice(indice, 1)
    },
    animar(el, done, negativo) {
      let rodada = 1;
      const temporizador = setInterval(() => {
        const novaLargura =
          this.larguraBase + (negativo ? -rodada * 10 : rodada * 10);
        el.style.width = `${novaLargura}px`;
        rodada++;
        if (rodada > 30) {
          clearInterval(temporizador);
          done();
        }
      }, 20);
    },
    //Entrada
    beforeEnter(el) {
      this.larguraBase = 0;
      el.style.width = `${this.larguraBase}px`;
    },
    enter(el, done) {
      this.animar(el, done, false);
    },
    // afterEnter(el) {
    //   console.log("afterEnter");
    // },
    // enterCancelled(el) {
    //   console.log("enterCancelled");
    // },

    //saida
    beforeLeave(el) {
      this.larguraBase = 300;
      el.style.width = `${this.larguraBase}px`;
    },
    leave(el, done) {
      this.animar(el, done, true);
    },
    // afterLeave(el) {
    //   console.log("afterLeave");
    // },
    // leaveCancelled(el) {
    //   console.log("leaveCancelled");
    // },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 1.5rem;
}
/* criando a animação através do atributo name='fade' da tag transition */

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s;
}

@keyframes slide-in {
  from {
    transform: translateY(40px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
  }
}
@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(40px);
    opacity: 0;
  }
}

.slide-enter-active {
  animation: slide-in 2s ease;
}
.slide-leave-active {
  position: absolute;
  width: 100%;
  animation: slide-out 2s ease;
}
.slide-move{
  transition: transform 1s;
}

.caixa {
  height: 100px;
  width: 300px;
  margin: 30px auto;
  background-color: lightgreen;
}
</style>
