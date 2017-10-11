<template>
    <div>
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
                                <th>Actualizar</th>
                                <th>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>2015 - 2016</td>
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
                                <td>2016 - 2017</td>
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
                                <td>2017 - 2018</td>
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
                                <td>2018 - 2019</td>
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
                                <td>2019 - 2020</td>
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
        <!--Inicio modal de formulario para ciclos -->
        <div id="modalCiclos" class="modal fade" role="dialog" data-backdrop="static" data-keyboard="false">
            <div class="modal-dialog modal-md" role="document">
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

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
                        <button type="button" class="btn btn-primary">{{ textoBtn }}</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- Fin  modal de formulario para ciclos  -->
    </div>
</template>
<script>
export default {
    name: 'ciclos',
    data() {
        return {
            titulo: '',
            textoBtn: ''
        }
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
    }

}
</script>

