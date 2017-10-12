<template>
  <div>
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-2 col-lg-2">
        <button class="btn btn-primary col-xs-12 col-sm-12 col-md-12 col-lg-12" @click="abrirModal(-1)">
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
                <td>Orientador registrado 2</td>
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
                <td>Orientador registrado 3</td>
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
                <td>Orientador registrado 4</td>
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
                <td>Orientador registrado 5</td>
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
            <h4 class="modal-title">
              <b>{{titulo}}</b>
            </h4>
          </div>
          <div class="modal-body" style="overflow-x:auto; max-height: 400px; overflow-y:auto;">
            <!-- Inicio del formulario -->
            <form role="form">
              <div class="form-group">
                <div class="row">
                  <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <label for="nombreOrientador">Nombre</label>
                    <input type="text" class="form-control" name="nombreOrientador" value="" >
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <label for="aPaterno">Apellido paterno</label>
                    <input type="text" class="form-control" name="aPaterno" value="" >
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
            </form>
            <!-- Fin del formulario -->
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
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
  name: 'orientadores',
   data() {
    return {
      titulo: '',
      textoBtn: ''
    }
  },
  methods: {
    abrirModal(id) {
      if (id == -1) {
        this.titulo = 'Agregar orientador'
        this.textoBtn = 'Agregar'
      } else {
        this.titulo = 'Actualizar información del orientador ' + id
        this.textoBtn = 'Actualizar'
      }
      $('#modalOrientadores').modal('show')
    }
  }
}
</script>


