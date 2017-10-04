import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        nombreSistema: 'Sistema de reportes v0.1.0',
        usuario: {},

    }
    /*,
    mutations: {
        setUsuario(state){
            state.usuario = {}
        }
    }*/
})