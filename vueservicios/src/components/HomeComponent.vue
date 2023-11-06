<template>
  <div>
    <h1>Home Component</h1>
    <h2>{{ mensaje }}</h2>
  </div>
</template>

<script>
import ServiceEjemplo from './../services/ServiceEjemplo'

const service = new ServiceEjemplo();

  export default {
    name: "HomeComponent",
    mounted(){
      this.mensaje = service.getSaludo("Alumno");
    },
    data(){
      return{
        mensaje: ""
      }
    }
  }
</script>

<style>

</style>