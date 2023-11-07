<template>
  <div class="container" style="margin: 10px">
    <h1>Nuevo Coche</h1>
    <form v-on:submit.prevent="crearCoche()"
    style="width: 500px; margin: 0 auto">
        <label class="form-label">ID Coche</label>
        <input type="number" class="form-control"
        v-model="coche.idCoche" />
        <br/>
        <label class="form-label">Marca</label>
        <input type="text" class="form-control"
        v-model="coche.marca" />
        <br/>
        <label class="form-label">Modelo</label>
        <input type="text" class="form-control"
        v-model="coche.modelo" />
        <br/>
        <label class="form-label">Conductor</label>
        <input type="text" class="form-control"
        v-model="coche.conductor" />
        <br/>
        <label class="form-label">Imagen</label>
        <input type="text" class="form-control"
        v-model="coche.imagen" />
        <br/>
        <button class="btn btn-info">
            Crear
        </button>
    </form>
  </div>
</template>

<script>
import ServiceCoches from '@/services/ServiceCoches';
const service = new ServiceCoches();

export default {
    name: "CreateCoche",
    data(){
        return{
            coche: {
                idCoche: 0,
                marca: "",
                modelo: "",
                conductor: "",
                imagen: "",
            },
            mensaje: ""
        }
    },
    methods:{
        crearCoche(){
            service.crearCoche(this.coche).then(result =>{
                console.log(result);
                this.mensaje = "Insertado Correctamente";
                this.$router.push("/coches");
            })
        }
    }
}
</script>

<style>

</style>