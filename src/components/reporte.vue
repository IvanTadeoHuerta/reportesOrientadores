<template>
    <form role="form">
        <div class="form-group">
            <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <label for="fecha">Fecha: </label>
                    <input type="text" class="form-control" name="fecha" :value="fecha"  disabled>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <label for="alumno">Nombre del alumno: </label>
                    <input type="text" class="form-control" name="alumno" value="Ivan Tadeo Huerta" disabled>
                </div>

            </div>
        </div>
        <div class="form-group">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <label for="asunto">Asunto:</label>
                    <input type="text" class="form-control" name="asunto" value=""/>
                </div>
            </div>
        </div>
        <div class="form-group">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <label for="motivo">Motivo:</label>
                    <textarea class="form-control" name="motivo" value=""/>
                </div>
            </div>
        </div>
        <div class="form-group">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <label for="acuerdos">Acuerdos:</label>
                    <textarea class="form-control" name="acuerdos" value=""/>
                </div>
            </div>
        </div>
        <div class="form-group">
            <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <button class="btn btn-danger btn-block">Levantar reporte</button>
                    <br>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <button class="btn btn-default btn-block">Cancelar</button>
                </div>
            </div>
        </div>
    </form>
</template>
<script>
export default {
    name: 'reporte',
    data(){
        return{
            fecha: moment(new Date()).format('YYYY-MM-DD')
        }
    }
}
</script>

