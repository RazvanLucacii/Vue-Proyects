<template>
    <div>
        <h1>Mi primera App VUE</h1>
        <img src="./../assets/images/home.jpg" style="width:150px; height: 150px; " />
        <h2>
            Su nombre es:
            <span>{{ nombre }}</span>
        </h2>
        <h2>
            Su numero es:
            <span>{{ numero }}</span>
        </h2>
    </div>
</template>

<script>
    //siempre debemos exportar el nombre que deseemos
    //dar al component en nuestra aplicacion vue
    export default {
        name: "HolaMundo",
        data(){
            //aqui debemmos declarar nuestras variables
            //no se utilizan palabras especiales para su declaracion
            //la declaracion de las variables se realiza con return y
            //un objeto JSON que contendra las variables y sus valores
            return{
                nombre: "Alumno",
                numero: 14,
                miArray: [],
                objeto: {}
            }
        }
    }
</script>

<style>
    h1 { color: blue}
    @import './../assets/css/estilos.css';
</style>