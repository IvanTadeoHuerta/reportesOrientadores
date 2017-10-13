<template>
  <div id="wrapper">
    <nav class="navbar navbar-default navbar-static-top" role="navigation" style="margin-bottom: 0">
      <cabecera></cabecera>
      <menu-superior></menu-superior>
      <menu-lateral></menu-lateral>
    </nav>

    <div id="page-wrapper">
      <div class="row">
        <div class="col-lg-12">
            <h5 class="page-header"><b>{{tituloContenido}}</b></h5>
            <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Cabecera from './cabecera.vue'
import MenuSuperior from './menuSuperior.vue'
import MenuLateral from './menuLateral.vue'
export default {
  name: 'home',
  data(){
    return{
      tituloContenido: 'Bienvenido'
    }
  },
  watch:{
    '$route.name'() {
        let nameRoute = this.$route.name

        switch(nameRoute){
          case 'home':
            this.tituloContenido = 'Bienvenido'
          break;
          case 'ciclos':
            this.tituloContenido = 'Ciclos escolares'
          break;
          case 'grupo':
            this.tituloContenido = 'Lista de alumnos del grupo'
          break;
          case 'grupos':
            this.tituloContenido = 'Grupos registrados para el ciclo escolar'
          break;
          case 'orientadores':
            this.tituloContenido = 'Orientadores'
          break;
          case 'historial':
            this.tituloContenido = 'Historial del estudiante '
          break;
        }
    }
  },
  components: {
    Cabecera,
    MenuSuperior,
    MenuLateral
  }
}
</script>
<style scoped>
.page-header{
  margin-top: 1em;
}
</style>

