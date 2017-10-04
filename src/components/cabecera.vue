<template>
    <!-- /header -->
    <div class="navbar-header">
        <a class="navbar-brand" href="#">
            <b>{{ nombreSistema }}</b>
        </a>
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
        </button>
    </div>
    <!-- /header -->
</template>
<script>
export default {
    name: 'cabecera',
    computed:{
        nombreSistema(){
            return this.$store.state.nombreSistema;
        }
    }
}
</script>
<style>

</style>
