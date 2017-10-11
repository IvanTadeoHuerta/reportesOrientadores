<template>
  <div>
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-2 col-lg-2">
        <button class="btn btn-primary col-xs-12 col-sm-12 col-md-12 col-lg-12" type="button">
          <span class="glyphicon glyphicon-plus"></span>&nbsp;&nbsp;Nuevo orientador
        </button>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-10 col-lg-10">
        <!--Formulario de búsqueda -->
        <div class="input-group col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <input type="text" class="form-control" placeholder="Buscar orientador">
          <span class="input-group-btn">
            <button class="btn btn-default" type="button">
              <span class="glyphicon glyphicon-search"></span>
            </button>
          </span>
        </div>
        <!--Fin formulario de búsqueda -->
      </div>
    </div>
    <br>
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div class="table-responsive">
          <table class="table table-striped table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>Nombre del orientador</th>
                <th>Actualizar</th>
                <th>Eliminar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Orientador registrado 1</td>
                <td>
                  <button class="btn btn-primary">
                    <span class="glyphicon glyphicon-list-alt"></span>
                  </button>
                </td>
                <td>
                  <button class="btn btn-danger">
                    <span class="glyphicon glyphicon-trash"></span>
                  </button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Orientador registrado 2</td>
                <td>
                  <button class="btn btn-primary">
                    <span class="glyphicon glyphicon-list-alt"></span>
                  </button>
                </td>
                <td>
                  <button class="btn btn-danger">
                    <span class="glyphicon glyphicon-trash"></span>
                  </button>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Orientador registrado 3</td>
                <td>
                  <button class="btn btn-primary">
                    <span class="glyphicon glyphicon-list-alt"></span>
                  </button>
                </td>
                <td>
                  <button class="btn btn-danger">
                    <span class="glyphicon glyphicon-trash"></span>
                  </button>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>Orientador registrado 4</td>
                <td>
                  <button class="btn btn-primary">
                    <span class="glyphicon glyphicon-list-alt"></span>
                  </button>
                </td>
                <td>
                  <button class="btn btn-danger">
                    <span class="glyphicon glyphicon-trash"></span>
                  </button>
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>Orientador registrado 1</td>
                <td>
                  <button class="btn btn-primary">
                    <span class="glyphicon glyphicon-list-alt"></span>
                  </button>
                </td>
                <td>
                  <button class="btn btn-danger">
                    <span class="glyphicon glyphicon-trash"></span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'orientadores'
}
</script>


