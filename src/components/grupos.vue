<template>
  <div>
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <button class="btn btn-primary col-xs-12 col-sm-12 col-md-2 col-lg-2" type="button" @click="agregarGrupo">
          <span class="glyphicon glyphicon-plus"></span>&nbsp;&nbsp;Nuevo Grupo
        </button>
      </div>
    </div>
    <div class="row">
      <br>
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <!--Formulario de búsqueda -->
        <div class="input-group col-xs-12 col-sm-12 col-md-6 col-lg-6">
          <input type="text" class="form-control" placeholder="Buscar grupo">
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
                <th>Grupo</th>
                <th>Orientador a cargo</th>
                <th>Actualizar</th>
                <th>Eliminar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Grupo 1° A</td>
                <td>Manuel Alba Matinez</td>
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
                <td>Grupo 2° B</td>
                <td>Luis Miguel Tadeo Huerta</td>
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
                <td>Grupo 3° C</td>
                <td>Francisco Carrillo</td>
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
                <td>Grupo 4° C</td>
                <td>Laura Montes de Oca</td>
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
                <td>Grupo 5° D</td>
                <td>Fernando Quintana</td>
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

    <!--Inicio modal de formulario para orientadores -->
    <div id="modalOrientadores" class="modal fade" role="dialog" data-backdrop="static" data-keyboard="false">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <h4 class="modal-title">
              <b>Titulo</b>
            </h4>
          </div>
          <div class="modal-body table-responsive" style="overflow-x:auto; max-height: 400px; overflow-y:auto;">
            <p>Aqui va el formulario de registro</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
          </div>
        </div>
      </div>
    </div>
    <!-- Fin  modal de formulario para orientadores  -->
  </div>
</template>

<script>
export default {
   name: 'grupos',
   methods:{
     agregarGrupo(){
        $('#modalOrientadores').modal('show')
     }
   }
}
</script>
