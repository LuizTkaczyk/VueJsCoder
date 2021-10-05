import Vue from 'vue'
import axios from 'axios'

Vue.use({
    install(Vue){
        Vue.prototype.$http = axios.create({
            baseURL:'https://stoke-trader-eeed6-default-rtdb.firebaseio.com/'
        })
    }
})