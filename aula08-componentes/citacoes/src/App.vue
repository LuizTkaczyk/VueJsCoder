<template>
	<div id="app">
		<span>
			<button @click="componente = 'Citacoes'">Citações</button>
			<button @click="componente = 'Sobre'">Sobre</button>
		</span>

<!-- Com kee-alive o componente não é destruido ao sair e voltar  -->
		<keep-alive>
		<component :is="componente"></component>
		</keep-alive>
		
	</div>
</template>

<script>
import Citacoes from './components/Citacoes'
import Sobre from './components/Sobre'

export default {
	components: { Citacoes, Sobre },
	data() {
		return {
			//pegando o componente Citacoes, para usa-la , coloca a tag component :is="nomeExemplo"
			componente:'Citacoes'
		}
	},
}
</script>

<style>
	#app {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
		font-size: 1.6rem;
	}

	button {
        outline: none;
        padding: 5px 15px 10px;
        margin: 10px 5px;
        border-radius: 3px;
        font-size: 2rem;
        font-weight: 300;
        color: #FFF;
        background-color: rgba(0, 0, 0, .5);
    }
</style>