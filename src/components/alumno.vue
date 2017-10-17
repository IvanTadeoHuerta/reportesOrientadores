<template>
    <!-- Inicio del formulario -->
    <form role="form">
        
        <div class="form-group">
            <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <label for="numeroLista">No Lista</label>
                    <input type="text" class="form-control" name="numeroLista" value="" disabled>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <label for="grupo">Grupo</label>
                    <input type="text" class="form-control" name="grupo" value=""  disabled>
                </div>

            </div>
        </div>
        <div class="form-group">
            <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <label for="nombreAlumno">Nombre</label>
                    <input type="text" class="form-control" name="nombreAlumno" value="">
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <label for="aPaterno">Apellido paterno</label>
                    <input type="text" class="form-control" name="aPaterno" value="">
                </div>

            </div>
        </div>
        <div class="form-group">
            <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <label for="aMaterno">Apellido materno</label>
                    <input type="text" class="form-control" name="aMaterno" value="">
                </div>

                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <label for="telefono">Telefono</label>
                    <input type="text" class="form-control" name="telefono" value="">
                </div>
            </div>
        </div>

        <div class="form-group">
            <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <label for="email">Correo Electronico:</label>
                    <input type="email" class="form-control" name="email" value="">
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <label for="otro">Otro dato:</label>
                    <input type="text" class="form-control" name="otro" value="">
                </div>
            </div>
        </div>
        <div class="form-group">
            <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <label for="nombreTutor">Nombre del tutor:</label>
                    <input type="text" class="form-control" name="nombreTutor" value="">
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <label for="aPaternoTutor">Apellido paterno del tutor:</label>
                    <input type="text" class="form-control" name="aPaternoTutor" value="">
                </div>
            </div>
        </div>
        <div class="form-group">
            <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <label for="aMaternoTutor">Apellido materno del tutor:</label>
                    <input type="text" class="form-control" name="aMaternoTutor" value="">
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <label for="user">usuario:</label>
                    <input type="text" class="form-control" name="user" value="" disabled>
                </div>
            </div>
        </div>
        <div class="form-group">
            <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <label for="contrasenia">Contraseña:</label>
                    <input type="password" class="form-control" name="contrasenia" value="">
                </div>
            </div>
        </div>
    </form>
    <!-- Fin del formulario -->
</template>
<script>
export default {
  name: 'alumno'
}
</script>
