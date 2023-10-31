<template>
    <div>
        <h1 style="color:red">Propiedad Conmutada</h1>
        <ul>
            <li v-for="game in juegosRojos" :key="game" v-html="game">
            </li>
        </ul>
        <button @click="getJuegosRojos()">
            Juegos Rojos
        </button>
        <div v-html="html"></div>
    </div>
</template>

<script>
    export default {
        name: "PropiedadConmutada",
        computed: {
            //una propiedad conmutada siempre devuelve valores
            // y no puede recibir parametros
            juegosRojos(){
                var datos = this.juegos;
                //recorremos cada juego y lo devolvemos en color rojo
                for(var i = 0; i < datos.length; i++){
                    var juego = datos[i];
                    juego = "<span style='color:red'>" + juego + "</span>";
                    datos[i] = juego;
                }
                return datos;
            }
        },
        methods: {
            getJuegosRojos(){
                for (var juego of this.juegos){
                    this.html += "<h1 style='color:red'>" + juego + "</h1>";
                }
            }
        },
        data(){
            return {
                html: "",
                juegos: [
                    "Parchis", "Luz roja, luz verde",
                    "Canicas", "La galleta", "La cuerda"
                ]
            }
        }
    }
</script>