<template>
    <div>
        <h1 style="color: blue">Directivas VUE</h1>
        <ul v-if="series.length > 0">
            <li v-for="serie in series" :key="serie">
                {{ serie }}
            </li>
        </ul>
        <hr/>
        <label>Numero: </label>
        <input type="text" v-model="numero" />
        <h2 v-if="numero > 0" style="color:green">
            Positivo
        </h2>
        <h2 v-else-if="numero == 0" style="color:blueviolet">
            Cero
        </h2>
        <h2 v-else style="color:red">
            Negativo
        </h2>
        <label>Nombre: </label>
        <input type="text" v-model="nombre" />
        <br/>
        <label>Edad: </label>
        <input type="number" v-model="edad" />
        <br/>
        <h1 style="color:red">
            Nombre: {{ nombre }}, Edad: {{ edad }}
        </h1>
        <h1>
            <!-- El simbolo $ nos permite acceder a ciertos elementos
            de vue en la zona de template por ejemplo,
            podemos acceeder a todo el contenido de data() -->
            {{ $data }}
        </h1>
    </div>
</template>

<script>
    export default {
        name: "DirectivasComponent",
        data() {
            return {
                series: ["Futurama", "Suits", "House of Cards", "Gen V"],
                nombre: "",
                numero: 0,
                edad: 0
            }
        },
        methods: {

        }
    }
</script>