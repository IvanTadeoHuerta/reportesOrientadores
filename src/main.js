import Vue from 'vue'
import VeeValidate from 'vee-validate'
import  {Validator}  from 'vee-validate';
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './routes'
import  { store }  from './store/store'
import  mensajes from './validator/validaciones'
import Alerta from './plugins/alerta'

Validator.updateDictionary(mensajes)
Vue.use(Alerta)
Vue.use(VeeValidate)
Vue.use(VueRouter)

const router = new VueRouter({ routes, mode: 'history'})

new Vue({
  el: '#app',
  store,
  render: h => h(App),
  router
})
