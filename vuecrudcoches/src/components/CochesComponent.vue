<template>
  <div>
    <h1>Crud Coches</h1>
    <img src="./../assets/images/gifload.gif"
    v-if="status == false" />
    <table v-else class="table table-bordered">
        <thead>
            <tr>
                <th>ID Coche</th>
                <th>Marca</th>
                <th>Modelo</th>
                <th>Conductor</th>
                <th>Imagen</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="coche in coches" :key="coche">
                <td>{{ coche.idCoche }}</td>
                <td>{{ coche.marca }}</td>
                <td>{{ coche.modelo }}</td>
                <td>{{ coche.conductor }}</td>
                <td><img :src="coche.imagen" style="width: 250px; height: 150px;" alt="coche"></td>
                <td>
                    <router-link class="btn btn-success" :to="'/detalles/' + coche.idCoche">
                        Detalles
                    </router-link>
                    <router-link class="btn btn-primary" :to="'/update/' + coche.idCoche">
                        Modificar
                    </router-link>
                    <router-link class="btn btn-danger" :to="'/delete/' + coche.idCoche">
                        Delete
                    </router-link>
                </td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
import ServiceCoches from '@/services/ServiceCoches';
const service = new ServiceCoches();

    export default {
        name: "CocheComponent",
        data(){
            return{
                coches: [],
                status: false
            }
        },
        mounted(){
            service.getCoches().then(result =>{
                this.coches = result;
                this.status = true;
            })
        }
    }
</script>

<style>

</style>