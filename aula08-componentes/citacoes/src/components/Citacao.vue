<template>
    <div class="citacao">
        <!-- a tag slot é usada para exibir o conteudo do componente, neste caso , de Citacoes.vue -->
        <!-- pode-se ou não nomear o slot, ex: <slot></slot>  ou <slot name='algo'></slot>-->
      <slot name="autor"></slot>
      <slot name="texto"></slot>
      <slot name="fonte"></slot>
        
    </div>
</template>

<script>
export default {
    

}
</script>

<style scoped>
    .citacao {
        border: 1px solid #DDD;
        background-color: rgba(0, 0, 0, .1);
        padding: 25px;
        max-width: 450px;
    }
</style>
