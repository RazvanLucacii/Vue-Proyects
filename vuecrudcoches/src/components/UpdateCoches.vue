<template>
  <div>
    <div class="container" style="margin: 10px">
        <h1>Update Coche</h1>
        <router-link to="/coches">Back</router-link>
        <form v-if="coche" v-on:submit.prevent="updateCoche()" style="width: 500px; margin: 0 auto">
            <label class="form-label">ID Coche</label>
            <input type="number" disabled class="form-control"
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
            <button class="btn btn-primary">Modificar</button>
        </form>
    </div>
  </div>
</template>

<script>
import ServiceCoches from '@/services/ServiceCoches';
const service = new ServiceCoches();

export default {
    name: "UpdateCoche",
    data(){
      return{
        coche: null,
      }
    },
    mounted(){
      var id = this.$route.params.id;
      service.findCoche(id).then(result =>{
        this.coche = result;
      })
    },
    methods:{
      updateCoche(){
        service.updateCoche(this.coche).then(result =>{
          console.log(result);
          this.$router.push("/coches");
        })
      }
    }
}
</script>

<style>

</style>