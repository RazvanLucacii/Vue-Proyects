<template>
  <div>
        <h1>Detalles Coche</h1>
        <router-link class="btn btn-primary" to="/coches">Back</router-link>
        <h3>ID: {{ this.coche.idCoche }} - Marca: {{ this.coche.marca }} - Modelo: {{ this.coche.modelo }} - Conductor: {{ this.coche.conductor }} </h3>
        <img :src="this.coche.imagen" alt="coche">
    </div>
</template>

<script>
import ServiceCoches from '@/services/ServiceCoches';
const service = new ServiceCoches();

export default {
    name: "DetallesCoches",
    data(){
      return{
        coche: [],
      }
    },
    mounted(){
      service.findCoche(this.$route.params.id).then(result =>{
        this.coche = result;
      })
    }
}
</script>

<style>

</style>