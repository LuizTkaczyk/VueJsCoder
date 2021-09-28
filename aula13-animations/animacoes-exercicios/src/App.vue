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
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Uma mensagem de informação para o usuário!",
      exibir: false, //true para a animação aparecer logo ao carregar a página
      tipoAnimacao: "fade",
      exibir2: true,
    };
  },
  methods: {
	  //Entrada
    beforeEnter(el) {
      console.log('beforeEnter');
    },
    enter(el, done) {
      console.log('enter');
	  done()
    },
    afterEnter(el) {
      console.log('afterEnter');
    },
    enterCancelled(el) {
      console.log('enterCancelled');
    },

	//saida
    beforeLeave(el) {
      console.log('beforeLeave');
    },
    leave(el,done) {
      console.log('leave');
	  done()
    },
    afterLeave(el) {
      console.log('afterLeave');
    },
    leaveCancelled(el) {
      console.log('leaveCancelled');
    },
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
  animation: slide-out 2s ease;
}

.caixa {
  height: 100px;
  width: 300px;
  margin: 30px auto;
  background-color: lightgreen;
}
</style>
