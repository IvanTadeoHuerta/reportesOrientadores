<template>
  <div>
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-2 col-lg-2">
        <button class="btn btn-primary col-xs-12 col-sm-12 col-md-12 col-lg-12" type="button" @click="abrirModal(-1)">
          <span class="glyphicon glyphicon-plus"></span>&nbsp;&nbsp;Nuevo Grupo
        </button>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-10 col-lg-10">
        <!--Formulario de búsqueda -->
        <div class="input-group col-xs-12 col-sm-12 col-md-12 col-lg-12">
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
                <th>Turno</th>
                <th>Orientador a cargo</th>
                <th>Actualizar</th>
                <th>Eliminar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Grupo 1° A</td>
                <td>Matutino</td>
                <td>Manuel Alba Matinez</td>
                <td>
                  <button class="btn btn-primary" @click="abrirModal(1)">
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
                <td>Matutino</td>
                <td>Luis Miguel Tadeo Huerta</td>
                <td>
                  <button class="btn btn-primary" @click="abrirModal(2)">
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
                <td>Matutino</td>
                <td>Francisco Carrillo</td>
                <td>
                  <button class="btn btn-primary" @click="abrirModal(3)">
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
                <td>Matutino</td>
                <td>Laura Montes de Oca</td>
                <td>
                  <button class="btn btn-primary" @click="abrirModal(4)">
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
                <td>Matutino</td>
                <td>Fernando Quintana</td>
                <td>
                  <button class="btn btn-primary" @click="abrirModal(5)">
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
              <b>{{titulo}}</b>
            </h4>
          </div>
          <div class="modal-body table-responsive" style="overflow-x:auto; max-height: 400px; overflow-y:auto;">
            <!-- Inicio del formulario -->
            <form role="form">
              <div class="form-group">
                <div class="row">
                  <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <label for="idGrupo">Id Grupo</label>
                    <input type="text" class="form-control" name="idGrupo" value="1M20175B" disabled>
                  </div>

                  <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <label for="turno">Ciclo escolar:</label>
                    <select class="form-control" name="turno" disabled>
                      <option>2017 -2018</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <div class="row">
                  <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <label for="grado">Grado</label>
                    <input type="number" class="form-control" name="grado" value="">
                  </div>

                  <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <label for="grupo">Grupo</label>
                    <input type="text" class="form-control" name="grupo" value="">
                  </div>
                </div>
              </div>

              <div class="form-group">
                <div class="row">
                  <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <label for="turno">Turno:</label>
                    <select class="form-control" name="turno">
                        <option>-- Seleccione --</option>
                        <option>Matutino</option>
                        <option>Vespertino</option>
                    </select>
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <label for="orientador">Orientador:</label>
                    <select class="form-control" name="orientador">
                      <option>-- Seleccione --</option>
                      <option>Nombre orientador 1</option>
                      <option>Nombre orientador 2</option>
                      <option>Nombre orientador 3</option>
                      <option>Nombre orientador 4</option>
                      <option>Nombre orientador 5</option>
                    </select>
                  </div>
                </div>
              </div>
            </form>
            <!-- Fin del formulario -->
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
            <button type="button" class="btn btn-primary">{{ textoBtn }}</button>
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
  data() {
    return {
      titulo: '',
      textoBtn: ''
    }
  },
  methods: {
    abrirModal(id) {
      if (id == -1) {
        this.titulo = 'Agregar grupo'
        this.textoBtn = 'Agregar'
      } else {
        this.titulo = 'Actualizar información del grupo ' + id
        this.textoBtn = 'Actualizar'
      }
      $('#modalOrientadores').modal('show')
    }
  }
}
</script>
