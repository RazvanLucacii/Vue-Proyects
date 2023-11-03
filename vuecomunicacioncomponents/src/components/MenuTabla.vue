<template>
    <div>
        <h1>Menu Tabla</h1>
        <button class="btn btn-success" @click="nuevoLink()" >
            Nuevo Link
        </button>
        <br/><br/>
        <ul id="menu">
            <li v-for="num in numeros" :key="num">
                <router-link :to="'/multiplicar/' + num">Tabla {{ num }}</router-link>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "MenuTabla",
        data(){
            return{
                numeros: [],
            }
        },
        methods:{
            nuevoLink(){
                var aleatorio = parseInt(Math.random() * 100) + 1;
                this.numeros.push(aleatorio);
            }
        }
    }
</script>

<style>
    ul#menu{
        display: inline;
    }    
</style>