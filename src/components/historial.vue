<template>
    <div>
        <ul class="nav nav-tabs">
            <li class="active">
                <a data-toggle="tab" href="#reportes">Reportes (1)</a>
            </li>
            <li>
                <a data-toggle="tab" href="#avisos">Avisos (3)</a>
            </li>
        </ul>

        <div class="tab-content">
            <div id="reportes" class="tab-pane fade in active">
                <p>Some content for report.</p>
            </div>
            <div id="avisos" class="tab-pane fade">
                <p>Some content for alert.</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'historial'
}
</script>

