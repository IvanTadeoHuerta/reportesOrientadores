<template>
    <div>
        <div class="contenedor-ciclos" v-show="seccionCiclos">
            <div class="row">
                <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                    <button class="btn btn-primary btn-block" @click="abrirModal(-1)">
                        <span class="glyphicon glyphicon-plus"></span>&nbsp;&nbsp;Nuevo Ciclo
                    </button>
                </div>
            </div>
            <div class="row">
                <br>
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div class="table-responsive">
                        <table class="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Ciclo Escolar</th>
                                    <th>Admin de grupos</th>
                                    <th>Actualizar periodo</th>
                                    <th>Eliminar</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>2015 - 2016</td>
                                    <td>
                                        <router-link to="/home/ciclos/grupos/1" >Ir a grupos</router-link>
                                    </td>
                                    <td>
                                        <button class="btn btn-primary" @click="abrirModal(1)">
                                            <span class="glyphicon  glyphicon-calendar"></span>
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
                                    <td>2016 - 2017</td>
                                    <td>
                                        <router-link to="/home/ciclos/grupos/2" >Ir a grupos</router-link>
                                    </td>
                                    <td>
                                        <button class="btn btn-primary" @click="abrirModal(2)">
                                            <span class="glyphicon  glyphicon-calendar"></span>
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
                                    <td>2017 - 2018</td>
                                    <td>
                                        <router-link to="/home/ciclos/grupos/3">Ir a grupos</router-link>
                                    </td>
                                    <td>
                                        <button class="btn btn-primary" @click="abrirModal(3)">
                                            <span class="glyphicon  glyphicon-calendar"></span>
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
                                    <td>2018 - 2019</td>
                                    <td>
                                        <router-link to="/home/ciclos/grupos/4" >Ir a grupos</router-link>
                                    </td>
                                    <td>
                                        <button class="btn btn-primary" @click="abrirModal(4)">
                                            <span class="glyphicon  glyphicon-calendar"></span>
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
                                    <td>2019 - 2020</td>
                                    <td>
                                        <router-link to="/home/ciclos/grupos/5">Ir a grupos</router-link>
                                    </td>
                                    <td>
                                        <button class="btn btn-primary" @click="abrirModal(5)">
                                            <span class="glyphicon  glyphicon-calendar"></span>
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
            <!--Inicio modal de formulario para ciclos -->
            <div id="modalCiclos" class="modal fade" role="dialog" data-backdrop="static" data-keyboard="false">
                <div class="modal-dialog modal-md" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">
                                <b>{{titulo}}</b>
                            </h4>
                        </div>
                        <div class="modal-body">
                            <div class="form-group">
                                <div class="row">
                                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                        <label for="finicio">Fecha inicio</label>
                                        <input type="text" class="form-control finicio" name="finicio" value="" autocomplete="off">
                                    </div>

                                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                        <label for="ffinal">Fecha final</label>
                                        <input type="text" class="form-control ffinal" name="ffinal" value="" autocomplete="off">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
                            <button type="button" class="btn btn-primary">{{ textoBtn }}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Fin  modal de formulario para ciclos  -->
        <div class="contenedor-grupos" v-show="!seccionCiclos">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ciclos',
    data() {
        return {
            titulo: '',
            textoBtn: '',
            seccionCiclos: true
        }
    },
    mounted(){
       $('.ffinal, .finicio').datetimepicker({
                 format: 'DD/MM/YYYY'
       })
    },
    beforeDestroy(){
       $('.ffinal, .finicio').datetimepicker('remove')
    },
    methods: {
        abrirModal(id) {
            if (id != -1) {
                this.titulo = 'Actualiza ciclo escolar'
                this.textoBtn = 'Actualizar'
            } else {
                this.titulo = 'Agrega ciclo escolar'
                this.textoBtn = 'Agregar'
            }

            $('#modalCiclos').modal('show')

        }
    },
    watch: {
        '$route.name'() {
            this.seccionCiclos = this.$route.name == 'ciclos' ? true : false
        }
    }

}
</script>
<style>

</style>


