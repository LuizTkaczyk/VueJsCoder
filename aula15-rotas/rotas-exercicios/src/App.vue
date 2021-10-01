<template>
	<div id="app">
		<h1>Rotas com VueRouter</h1>
		<!-- Router view nomeado -->
		<router-view name="menu"></router-view>
		<transition enter-active-class="animated rubberBand" leave-active-class="animated rollOut" mode="out-in">
		<router-view></router-view>
		</transition>
		
		<router-view name="menuInferior"></router-view>
	</div>
</template>

<script>




export default {
	
	
}
</script>

<style>
	#app {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
