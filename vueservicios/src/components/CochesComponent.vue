<template>
    <div>
        <h1>Api Coches Component</h1>
        <div v-for="coche in coches" :key="coche" class="card">
            <div class="card-body" style="width: 18rem;">
                <h1 style="color:blue">
                    {{ coche.marca }} - {{ coche.modelo }}
                </h1>
                <h2 style="color:red">
                    Conductor: {{ coche.conductor }}
                </h2>
                <img :src="coche.imagen" alt="coche" style="width: 300px; height: 200px;" />
                
            </div>
        </div>
    </div>
</template>

<script>
//import axios from 'axios';
//import Global from './../Global'

import ServiceCoches from '@/services/ServiceCoches';
const service = new ServiceCoches();
//si necesito variables que sean declaradas para todos los metodos
//que tengamos en el component, lo haremos aqui

    export default {
        name: "CochesComponent",
        data(){
            return{
                coches: [],
            }
        },
        mounted(){
            service.getCoches.then(result =>{
                this.coches = result;
            })

            // var request = "webresources/coches";
            // var url = Global.urlApiCoches + request;
            // axios.get(url).then(response => {
            //     this.coches = response.data;
            // })
        }
    }
</script>