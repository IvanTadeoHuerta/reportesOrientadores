<template>
    <div class="row">
        <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12">
            <button class="btn btn-primary btn-block">
                <span class="glyphicon glyphicon-plus"></span>&nbsp;&nbsp;Nuevo Ciclo
            </button>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-10 col-lg-10">
            <!--Formulario de búsqueda -->
            <div class="input-group">
                <select class="form-control">
                    <option selected>-- Seleccione ciclo escolar--</option>
                    <option>2015 - 2016 </option>
                    <option>2016 - 2017 </option>
                    <option>2017 - 2018 </option>
                    <option>2018 - 2019 </option>
                    <option>2019 - 2020 </option>
                </select>
                <span class="input-group-btn">
                    <button class="btn btn-default" type="button">
                        <span class="glyphicon glyphicon-search"></span>
                    </button>
                </span>
            </div>
            <!--Fin formulario de búsqueda -->
        </div>
    </div>
</template>
<script>
export default {
    name: 'ciclos'
}
</script>

