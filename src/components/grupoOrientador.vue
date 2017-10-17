<template>
  <div>
    <div v-show="seccion == 'list'">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
          <button class="btn btn-primary col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <span class="glyphicon glyphicon-plus"></span>&nbsp;&nbsp;Nuevo alumno
          </button>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
          <button class="btn btn-success col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <span class="glyphicon glyphicon-plus"></span>&nbsp;&nbsp;Reporte a seleccionados
          </button>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
          <button class="btn btn-warning col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <span class="glyphicon glyphicon-plus"></span>&nbsp;&nbsp;Aviso a seleccionados
            <br>
          </button>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
          <button class="btn btn-danger col-xs-12 col-sm-12 col-md-12 col-lg-12">
             <span class="glyphicon glyphicon-minus"></span>&nbsp;&nbsp;Baja seleccionados
          </button>
        </div>
      </div>
      <br>

      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
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
                  <th><input type="checkbox" v-model="checkedAll" @click="seleccionarTodos()"></th>
                  <th>N.L.</th>
                  <th>Nombre del alumno</th>
                  <th>Nombre del tutor</th>
                  <th>Reporte</th>
                  <th>Avisos</th>
                  <th>Historial</th>
                  <th>Actualizar</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th colspan="9">Total de alumnos seleccionados: {{ seleccionados.length | alumnosSeleccionados }}</th>
                </tr>
              </tfoot>
              <tbody>
                <tr>
                  <td><input type="checkbox"  value="alumno1" v-model="seleccionados"></td>
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
                      <span class="glyphicon glyphicon-minus"></span>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td><input type="checkbox" value="alumno2" v-model="seleccionados"></td>
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
                       <span class="glyphicon glyphicon-minus"></span>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td><input type="checkbox" value="alumno3" v-model="seleccionados"></td>
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
                         <span class="glyphicon glyphicon-minus"></span>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td><input type="checkbox" value="alumno4" v-model="seleccionados"></td>
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
                        <span class="glyphicon glyphicon-minus"></span>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td><input type="checkbox" value="alumno5" v-model="seleccionados"></td>
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
                        <span class="glyphicon glyphicon-minus"></span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div v-show="seccion != 'list'">
      <a href="#" @click.prevent="verListaGrupo()">
        <span class="glyphicon glyphicon-chevron-left"></span>Regresar a la lista</a>
    </div>
    <br>
    <historial v-show="seccion == 'historial'" ></historial>
    <reporte v-show="seccion == 'reporte'" @cancelarAccion="verListaGrupo()"></reporte>
  </div>
</template>
<script>
import Historial from './historial.vue'
import Reporte from './reporte.vue'
export default {
  name: 'grupo',
  data() {
    return {
      seccion: 'list',
      checkedAll: false,
      seleccionados: [],
    }
  },
  methods: {
    verHistorial: function() {
      this.seccion = 'historial'
    },
    reporte: function() {
      this.seccion = 'reporte'
    },
    verListaGrupo: function() {
      this.seccion = 'list'
    },
    seleccionarTodos: function(){
        if(this.checkedAll){
          this.seleccionados = []
           for(let i=1; i<=5; i++){
              this.seleccionados.push('alumno'+i)
           }
        }else{
          this.seleccionados = []
        }
    }
  },
  filters: {
      alumnosSeleccionados(cantidad){
        return cantidad == 5 ?  'Todos' :cantidad
      }     
                  
  },
  watch:{
      seleccionados(){
          if(this.seleccionados.length == 5){
            this.checkedAll = true
          }else{
            this.checkedAll = false
          }
      }
  },
  components: {
    Historial,
    Reporte
  }

}
</script>
<style scoped>
.puntero {
  cursor: pointer
}
</style>


