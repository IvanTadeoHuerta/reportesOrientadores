/*
 *Modulos que se integran a las rutas
 */

import Login from './components/login.vue'
import Home from './components/home.vue'
import Ciclos from './components/ciclos.vue'
import Orientadores from './components/orientadores.vue'
import Grupos from './components/grupos.vue'
import Estudiante from './components/estudiante.vue'
import Grupo from './components/grupoOrientador.vue'

const routes = [
    { path: '/', component: Login, name: 'login' },
    {
        path: '/home', component: Home, name: 'home',
        children: [
            {
                path: 'ciclos',
                name: 'ciclos',
                component: Ciclos,
                children: [
                    {
                        path: 'grupos/:id',
                        name: 'grupos',
                        component: Grupos
                    }
                ]
            },
            {
                path: 'orientadores',
                name: 'orientadores',
                component: Orientadores
            },
            {
                path: 'estudiante/:id',
                name: 'estudiante',
                component: Estudiante
            },
            {
                path: 'grupo/:id',
                name: 'grupo',
                component: Grupo
            }

        ]
    }
]

export default routes