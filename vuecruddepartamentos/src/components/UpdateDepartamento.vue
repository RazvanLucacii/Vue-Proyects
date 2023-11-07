<template>
    <div class="container" style="margin: 10px">
        <h1>Nuevo Departamento</h1>
        <router-link to="/departamentos">Back</router-link>
        <form v-if="departamento" v-on:submit.prevent="updateDepartamento()" style="width: 500px; margin: 0 auto">
            <label class="form-label">ID Departamento</label>
            <input type="number" disabled class="form-control"
            v-model="departamento.idDepartamento" />
            <br/>
            <label class="form-label">Nombre</label>
            <input type="text" class="form-control"
            v-model="departamento.nombre" />
            <br/>
            <label class="form-label">Localidad</label>
            <input type="text" class="form-control"
            v-model="departamento.localidad" />
            <br/>
            <button class="btn btn-primary">Modificar</button>
        </form>
    </div>
</template>

<script>
import ServiceDepartamentos from '@/services/ServiceDepartamentos'
const service = new ServiceDepartamentos();

    export default {
        name: "UpdateDepartamentos",
        data(){
            return{
                departamento: null,
            }
        },
        mounted(){
            var id = this.$route.params.id;
            service.findDepartamento(id).then(result =>{
                this.departamento = result;
            })
        },
        methods:{
            updateDepartamento(){
                service.updateDepartamento(this.departamento).then(result =>{
                    console.log(result);
                    this.$router.push("/departamentos");
                })
            }
        }
    }
</script>

<style>

</style>