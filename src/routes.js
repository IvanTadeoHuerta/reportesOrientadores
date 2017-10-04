/*
 *Modulos que se integran a las rutas
 */

import Login from './components/login.vue'
import Home from './components/home.vue'

const routes = [
    {path:'/', component:Login, name:'login'},
    {path:'/home', component:Home, name:'home'}
]

export default routes