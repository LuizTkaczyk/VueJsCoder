<template>
  <aside class="menu"></aside>
</template>

<script>
export default {
name:'Menu'
}
</script>

<style>
    .menu{
        grid-area: menu;
        background: linear-gradient(to right, #232526, #414345);
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
    }

</style>