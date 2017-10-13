<template>
    <div>
        <ul class="nav nav-tabs">
            <li class="active">
                <a data-toggle="tab" href="#reportes">Reportes (1)</a>
            </li>
            <li>
                <a data-toggle="tab" href="#avisos">Avisos (2)</a>
            </li>
        </ul>

        <div class="tab-content">
            <div id="reportes" class="tab-pane fade in active">
                <table class="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Asunto</th>
                            <th>Fecha de recibido</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr :class="[true? 'leido': 'noleido' ,{puntero:true}]">
                            <th>1</th>
                            <td>No asistió a clase</td>
                            <td>12-09-2017</td>
                        </tr>
                        <tr :class="[false? 'leido': 'noleido',{puntero:true}]">
                            <th>2</th>
                            <td>No ha entregado tareas</td>
                            <td>Ayer</td>
                        </tr>
                        <tr :class="[true? 'leido': 'noleido',{puntero:true}]">
                            <th>3</th>
                            <td>No trajo material</td>
                            <td>Hoy</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div id="avisos" class="tab-pane fade">
                <table class="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Asunto</th>
                            <th>Fecha de recibido</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr :class="[false? 'leido': 'noleido' ,{puntero:true}]">
                            <th>1</th>
                            <td>No habrá clases el proximo Lunes</td>
                            <td>12-09-2017</td>
                        </tr>
                        <tr :class="[true? 'leido': 'noleido',{puntero:true}]">
                            <th>2</th>
                            <td>Junta general el dia 2 de Nov</td>
                            <td>Ayer</td>
                        </tr>
                        <tr :class="[true? 'leido': 'noleido',{puntero:true}]">
                            <th>3</th>
                            <td>Salen temprano el dia 20 de Noviembre</td>
                            <td>Hoy</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'historial'
}
</script>
<style scoped>
.noleido {
    font-weight: bold;
    background-color: white;
}

.leido {
    font-weight: normal;
    background-color: #FAFAFA;
}

.puntero {
    cursor: pointer
}
</style>

