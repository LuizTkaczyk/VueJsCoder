<template>

<div class="home">
    <PageTitle icon="fa fa-home" main="Dashboard" sub="Base de conhecimento"></PageTitle>
    <div class="stats">
        <Stat title="Categorias" :value="stat.categories" icon="fa fa-folder" color="#d54d50"></Stat>
        <Stat title="Artigos" :value="stat.articles" icon="fa fa-file" color="#3bc480"></Stat>
        <Stat title="Categorias" :value="stat.users" icon="fa fa-user" color="#3282cd"></Stat>
    </div>
</div>
  
</template>

<script>
import PageTitle from '../template/PageTitle'
import Stat from './Stat'
import axios from 'axios'
import {baseApiUrl} from '@/global'
export default {
    components:{PageTitle, Stat},
    name: 'Home',
    data() {
        return {
            stat:{}
        }
    },
    methods: {
        getStats(){
            axios.get(`${baseApiUrl}/stats`).then(res => this.stat = res.data)
        }
    },

    //chamada no momento em que o componente for montado (montando as estatísticas)
    mounted() {
        this.getStats()
    },

}
</script>

<style>

</style>