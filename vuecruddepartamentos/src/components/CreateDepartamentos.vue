<template>
  <div class="container" style="margin: 10px">
    <h1>Nuevo Departamento</h1>
    <form v-on:submit.prevent="crearDepartamento()"
    style="width: 500px; margin: 0 auto">
        <label class="form-label">ID Departamento</label>
        <input type="number" class="form-control"
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
        <button class="btn btn-info">
            Crear
        </button>
    </form>
  </div>
</template>

<script>
import ServiceDepartamentos from '@/services/ServiceDepartamentos';
const service = new ServiceDepartamentos();

    export default {
        name: "CreateDepartamento",
        data(){
            return{
                departamento: {
                    idDepartamento: 0,
                    nombre: "",
                    localidad: ""
                },
                mensaje: ""
            }
        },
        methods:{
            crearDepartamento(){
                service.crearDepartamento(this.departamento).then(result =>{
                    console.log(result)
                    this.mensaje = "Insertado correctamente";
                    this.$router.push("/departamentos");
                })
            }
        }
    }
</script>

<style>

</style>