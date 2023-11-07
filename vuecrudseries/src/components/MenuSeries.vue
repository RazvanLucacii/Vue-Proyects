<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <router-link class="navbar-brand" to="/"><img src="./../assets/images/stranger-things.jpg" style="height: 80px; width: 150px" alt="."/></router-link>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/create">Nuevo Personaje</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/update">Modificar Personajes</router-link>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Series
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li class="nav-item" v-for="serie in series" :key="serie">
                                <router-link class="dropdown-item" :to="'/detalles/' + serie.idSerie">
                                    {{ serie.nombre }}
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
import ServicesSeries from '@/services/ServicesSeries';
const service = new ServicesSeries();

    export default {
        name: "MenuSeries",
        data(){
            return{
                series: [],
            }
        },
        mounted(){
            service.getSeries().then(result =>{
                this.series = result;
            })
        }
    }
</script>

<style>

</style>