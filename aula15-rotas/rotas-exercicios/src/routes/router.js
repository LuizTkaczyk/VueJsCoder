import Vue from 'vue'
import Router from 'vue-router'
// importando os componentes
import Inicio from '../components/Inicio'
import Usuario from '../components/usuario/Usuario'
import UsuarioLista from '../components/usuario/UsuarioLista'
import UsuarioDetalhe from '../components/usuario/UsuarioDetalhe'
import UsuarioEditar from '../components/usuario/UsuarioEditar'
import Menu from '../components/template/Menu.vue'
import MenuAlt from '../components/template/MenuAlt.vue'

//registrando o Router
Vue.use(Router)

export default new Router({
    //no mode usa o modo hash ou history, o hash o servidor não reconhece, somente o browser!!
    mode: 'history',
    routes: [
        {
            name: 'inicio', 
            path: '/',
            //component: Inicio , 
            //usando multiplos router views
            components: {
                default: Inicio,
                menu: Menu,
                
            },
            
        },
        {
            path: '/usuario',
            //component: Usuario,
            //usando multiplos router views
            components:{
                default:Usuario,
                menu: MenuAlt,
                menuInferior: MenuAlt
            },
            props: true,//props de Usuario.vue com a chamada de id
            //criando uma rota aninhada através do usuario com o children
            children: [
                { path: '', component: UsuarioLista },
                { path: ':id', component: UsuarioDetalhe, props: true },
                { path: ':id/editar', component: UsuarioEditar, props: true, name: 'editarUsuario' },
            ]
        },



    ]
})