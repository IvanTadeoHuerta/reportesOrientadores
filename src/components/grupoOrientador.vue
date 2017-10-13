<template>
  <div>
    <div v-show="seccion == 'list'">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-2 col-lg-2">
          <button class="btn btn-primary col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <span class="glyphicon glyphicon-plus"></span>&nbsp;&nbsp;Nuevo alumno
          </button>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-10 col-lg-10">
          <!--Formulario de búsqueda -->
          <div class="input-group col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <input type="text" class="form-control" placeholder="Buscar alumno">
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
                  <th>Nombre del alumno</th>
                  <th>Nombre del tutor</th>
                  <th>Reporte</th>
                  <th>Avisos</th>
                  <th>Historial</th>
                  <th>Actualizar</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Alumnno registrado 1</td>
                  <td>Tutor registrado 1</td>
                  <td>
                    <button class="btn btn-success" @click="reporte()">
                      <span class="glyphicon glyphicon-plus"></span>
                    </button>
                  </td>
                  <td>
                    <button type="button" class="btn btn-warning">
                      <span class="glyphicon glyphicon-plus"></span>
                    </button>
                  </td>
                  <td>
                    <button class="btn btn-default" @click="verHistorial(1)">
                      <span class="glyphicon glyphicon-th-list"></span>
                    </button>
                  </td>
                  <td>
                    <button class="btn btn-primary">
                      <span class="glyphicon glyphicon-pencil"></span>
                    </button>
                  </td>
                  <td>
                    <button class="btn btn-danger">
                      Dar de baja
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Alumnno registrado 2</td>
                  <td>Tutor registrado 2</td>
                  <td>
                    <button class="btn btn-success" @click="reporte()">
                      <span class="glyphicon glyphicon-plus"></span>
                    </button>
                  </td>
                  <td>
                    <button type="button" class="btn btn-warning">
                      <span class="glyphicon glyphicon-plus"></span>
                    </button>
                  </td>
                  <td>
                    <button class="btn btn-default" @click="verHistorial(2)">
                      <span class="glyphicon glyphicon-th-list"></span>
                    </button>
                  </td>
                  <td>
                    <button class="btn btn-primary">
                      <span class="glyphicon glyphicon-pencil"></span>
                    </button>
                  </td>
                  <td>
                    <button class="btn btn-danger">
                      Dar de baja
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Alumnno registrado 3</td>
                  <td>Tutor registrado 3</td>
                  <td>
                    <button class="btn btn-success" @click="reporte()">
                      <span class="glyphicon glyphicon-plus"></span>
                    </button>
                  </td>
                  <td>
                    <button type="button" class="btn btn-warning">
                      <span class="glyphicon glyphicon-plus"></span>
                    </button>
                  </td>
                  <td>
                    <button class="btn btn-default" @click="verHistorial(3)">
                      <span class="glyphicon glyphicon-th-list"></span>
                    </button>
                  </td>
                  <td>
                    <button class="btn btn-primary">
                      <span class="glyphicon glyphicon-pencil"></span>
                    </button>
                  </td>
                  <td>
                    <button class="btn btn-danger">
                      Dar de baja
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Alumnno registrado 4</td>
                  <td>Tutor registrado 4</td>
                  <td>
                    <button class="btn btn-success" @click="reporte()">
                      <span class="glyphicon glyphicon-plus"></span>
                    </button>
                  </td>
                  <td>
                    <button type="button" class="btn btn-warning">
                      <span class="glyphicon glyphicon-plus"></span>
                    </button>
                  </td>
                  <td>
                    <button class="btn btn-default" @click="verHistorial(4)">
                      <span class="glyphicon glyphicon-th-list"></span>
                    </button>
                  </td>
                  <td>
                    <button class="btn btn-primary">
                      <span class="glyphicon glyphicon-pencil"></span>
                    </button>
                  </td>
                  <td>
                    <button class="btn btn-danger">
                      Dar de baja
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Alumnno registrado 5</td>
                  <td>Tutor registrado 5</td>
                  <td>
                    <button class="btn btn-success" @click="reporte()">
                      <span class="glyphicon glyphicon-plus"></span>
                    </button>
                  </td>
                  <td>
                    <button type="button" class="btn btn-warning">
                      <span class="glyphicon glyphicon-plus"></span>
                    </button>
                  </td>
                  <td>
                    <button class="btn btn-default" @click="verHistorial(1)">
                      <span class="glyphicon glyphicon-th-list"></span>
                    </button>
                  </td>
                  <td>
                    <button class="btn btn-primary">
                      <span class="glyphicon glyphicon-pencil"></span>
                    </button>
                  </td>
                  <td>
                    <button class="btn btn-danger">
                      Dar de baja
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <historial v-show="seccion == 'historial'"></historial>
    <reporte v-show="seccion == 'reporte'"></reporte>
  </div>
</template>
<script>
import Historial from './historial.vue'
import Reporte from './reporte.vue'
export default {
  name: 'grupo',
  data(){
    return{
      seccion: 'list'
    }
  },
  methods:{
    verHistorial: function(){
      this.seccion = 'historial'
    },
    reporte: function(){
      this.seccion = 'reporte'
    }
  },
  components:{
    Historial,
    Reporte
  }

}
</script>

