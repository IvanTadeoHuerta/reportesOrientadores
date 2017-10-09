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
  mounted: function() {

  },
  components: {
    Cabecera,
    MenuSuperior,
    MenuLateral
  }
}
</script>

