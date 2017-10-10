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
                             <router-link to="grupo"  active-class="active">Grupo 1° A</router-link>
                        </li>
                        <li>
                             <router-link to="grupo"  active-class="active">Grupo 3° A</router-link>
                        </li>
                        <li>
                             <router-link to="grupo"  active-class="active">Grupo 5° B</router-link>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#">Mis hijos
                        <span class="fa arrow"></span>
                    </a>
                    <ul class="nav nav-second-level">
                        <li>
                           <router-link to="historial"  active-class="active">Juan Pérez García</router-link>
                        </li>
                        <li>
                           <router-link to="historial"  active-class="active">Alejandro Magno</router-link>
                        </li>
                    </ul>
                </li>
                <li>
                    <router-link to="orientadores"  active-class="active">Orientadores</router-link>
                </li>
                <li>
                    <router-link to="grupos"  active-class="active">Grupos</router-link>
                </li>
            </ul>
        </div>
    </div>
    <!-- fin menu lateral -->
</template>

<script>
export default {
    name: 'menuLateral',
    mounted: function(){
        /*!
        * Start Bootstrap - SB Admin 2 v3.3.7+1 (http://startbootstrap.com/template-overviews/sb-admin-2)
        * Copyright 2013-2016 Start Bootstrap
        * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap/blob/gh-pages/LICENSE)
        */
        $(function(){$("#side-menu").metisMenu()}),$(function(){$(window).bind("load resize",function(){var i=50,n=this.window.innerWidth>0?this.window.innerWidth:this.screen.width;n<768?($("div.navbar-collapse").addClass("collapse"),i=100):$("div.navbar-collapse").removeClass("collapse");var e=(this.window.innerHeight>0?this.window.innerHeight:this.screen.height)-1;e-=i,e<1&&(e=1),e>i&&$("#page-wrapper").css("min-height",e+"px")});for(var i=window.location,n=$("ul.nav a").filter(function(){return this.href==i}).addClass("active").parent();;){if(!n.is("li"))break;n=n.parent().addClass("in").parent()}});
    }
}
</script>



