<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand">Servicios Vue</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link class="nav-link active" to="/">
                        Home
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link active" to="/coches">
                        Coches
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link active" to="/detalleempleados">
                        Empleados
                    </router-link>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Oficios Empleados
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li v-for="oficio in oficios" :key="oficio">
                           <router-link class="dropdown-item" 
                           :to="'/empleadosoficios/' + oficio">
                                {{ oficio }}
                           </router-link> 
                        </li>
                    </ul>
                </li>
            </ul>
            </div>
        </div>
    </nav>
  </div>
</template>

<script>
import Global from './../Global';
import axios from 'axios';

export default {
    name: "MenuComponent",
    data(){
        return{
            oficios: []
        }
    },
    mounted(){
        var request = "api/empleados/oficios";
        var url = Global.urlApiEmpleados + request;
        axios.get(url).then(response =>{
            this.oficios = response.data;
        })
    }
}
</script>

<style>

</style>