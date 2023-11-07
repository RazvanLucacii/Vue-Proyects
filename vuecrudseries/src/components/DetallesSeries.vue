<template>
  <div class="container">
    <h1>Detalles Series</h1>
    <div class="card" style="width: 18rem;">
        <img :src="this.serie.imagen" class="card-img-top" alt="Serie">
        <div class="card-body">
            <h5 class="card-title">{{ this.serie.nombre }}</h5>
            <p class="card-text">IMDB: {{ this.serie.puntuacion }}</p>
            <router-link to="/personajes" class="btn btn-success">Personajes</router-link>
        </div>
    </div>
  </div>
</template>

<script>
import ServicesSeries from '@/services/ServicesSeries';
const service = new ServicesSeries();

    export default {
        name: "DetallesSeries",
        data(){
            return{
                serie: [],
            }
        },
        mounted(){
            service.findSeries(this.$route.params.id).then(result =>{
                this.serie = result;
            })
        },
    }
</script>

<style>

</style>