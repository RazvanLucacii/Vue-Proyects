<template>
    <div>
        <h1>Padre Suma Component</h1>
        <hr/>
        <h2>La suma es: {{ suma }}</h2>
        <br/>
        <button @click="generarNumero()">Nuevo Numero</button>
        <div v-for="num in numeros" :key="num">
            <HijoSuma :nuevohijo="num" v-on:sumarnumerin="sumarnumero"/>
        </div>
    </div>
</template>

<script>
import HijoSuma from './HijoSuma.vue';
    export default {
        name: "PadreSuma",
        components: {
            HijoSuma
        },
        data(){
            return{
                numeros: [],
                suma: 0
            }
        },
        methods: {
            generarNumero(){
                var aleatorio = parseInt(Math.random() * 100) + 1;
                this.numeros.push(aleatorio);
            },
            sumarnumero(nuevohijo){
                this.suma += nuevohijo;
            }
        }
    }
</script>