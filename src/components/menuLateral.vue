<template>
    <!-- menu lateral -->
    <div class="navbar-default sidebar" role="navigation">
        <div class="sidebar-nav navbar-collapse">
            <ul class="nav" id="side-menu">
                <li>
                    <a href="#">Mis grupos
                        <span class="fa arrow"></span>
                    </a>
                    <ul class="nav nav-second-level">
                        <li>
                             <router-link to="/home/grupo/1"  active-class="active">Grupo 1° A</router-link>
                        </li>
                        <li>
                             <router-link to="/home/grupo/2"  active-class="active">Grupo 3° A</router-link>
                        </li>
                        <li>
                             <router-link to="/home/grupo/3"  active-class="active">Grupo 5° B</router-link>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#">Mis hijos
                        <span class="fa arrow"></span>
                    </a>
                    <ul class="nav nav-second-level">
                        <li>
                           <router-link to="/home/historial/1"  active-class="active">Juan Pérez García</router-link>
                        </li>
                        <li>
                           <router-link to="/home/historial/2"  active-class="active">Luis Magno</router-link>
                        </li>
                    </ul>
                </li>
                <li>
                    <router-link to="/home/orientadores"  active-class="active">Orientadores</router-link>
                </li>
                <li>
                    <router-link to="/home/ciclos"  active-class="active">Ciclos Escolares</router-link>
                </li>
            </ul>
        </div>
    </div>
    <!-- fin menu lateral -->
</template>

<script>
export default {
    name: 'menuLateral'
}
</script>



