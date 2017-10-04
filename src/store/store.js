import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        nombreSistema: 'Sistema de reportes v0.1.0',
        datosSession: {
            id: 1,
            tipo: 2,
            username: 'usuario010',
            password: '123',
            nombre: 'Usuario Ejemplo Prueba'
        },

    }
    /*,
    mutations: {
        setUsuario(state){
            state.usuario = {}
        }
    }*/
})