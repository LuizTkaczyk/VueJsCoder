<template>
  <aside class="menu" v-show="isMenuVisible"></aside>
</template>

<script>

import {mapState} from 'vuex'
export default {
name:'Menu',
computed: mapState(['isMenuVisible']) //isMenuVisible vindo de store.js
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