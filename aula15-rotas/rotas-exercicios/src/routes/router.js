import Vue from 'vue'
import Router from 'vue-router'
// importando os componentes
import Inicio from '../components/Inicio'
import Menu from '../components/template/Menu.vue'
import MenuAlt from '../components/template/MenuAlt.vue'
// import Usuario from '../components/usuario/Usuario'
// import UsuarioLista from '../components/usuario/UsuarioLista'
// import UsuarioDetalhe from '../components/usuario/UsuarioDetalhe'
//import UsuarioEditar from '../components/usuario/UsuarioEditar'

//registrando o Router
Vue.use(Router)

//lazy loader - importando o UsuarioEditar e os outros aqui - não carrega todos os componente de uma vez
//Grupo de componentes criados com /* webpackChunkName:"usuario"*/
const Usuario = () => import(/* webpackChunkName:"usuario"*/ '../components/usuario/Usuario')
const UsuarioLista = () => import(/* webpackChunkName:"usuario"*/'../components/usuario/UsuarioLista')
const UsuarioDetalhe = () => import('../components/usuario/UsuarioDetalhe')
const UsuarioEditar = () => import('../components/usuario/UsuarioEditar')


const router = new Router({
    //no mode usa o modo hash ou history, o hash o servidor não reconhece, somente o browser!!
    mode: 'history',
    //para uso do hash, quando abrir a página, ela rola até a tag selecionada
    scrollBehavior(to) {
        if (to.hash) {
            return { selector: to.hash }
        }


        //return{x:0, y:1000}
    },
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
            components: {
                default: Usuario,
                menu: MenuAlt,
                menuInferior: MenuAlt
            },
            props: true,//props de Usuario.vue com a chamada de id
            //criando uma rota aninhada através do usuario com o children
            children: [
                { path: '', component: UsuarioLista },
                {
                    path: ':id', component: UsuarioDetalhe, props: true, beforeEnter: (to, from, next) => {
                        console.log('Antes da rota -> usuário detalhe')
                        next()
                    }
                },
                { path: ':id/editar', component: UsuarioEditar, props: true, name: 'editarUsuario' },
            ]
        },

        //redirecionando as rotas
        {
            path: '/redirecionar',
            redirect: '/usuario'
        },
        //caso seja declarado um endereço inválido na barra de endereço, ele sempre irá voltar para a página inicial
        {
            path: '/*',
            redirect: '/'
        }



    ]
})

router.beforeEach((to, from, next) => {
    console.log('Antes das rotas -> global')
    next()
})

export default router