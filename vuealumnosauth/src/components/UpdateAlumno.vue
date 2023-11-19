<template>
  <div>
    <div class="container" style="margin: 10px">
        <h1>Update Alumno</h1>
        <router-link class="btn btn-info" to="/alumnos">Back</router-link>
        <form v-if="alumno" v-on:submit.prevent="updateAlumno()" style="width: 500px; margin: 0 auto">
            <label class="form-label">ID Alumno</label>
            <input type="number" disabled class="form-control"
            v-model="alumno.idAlumno" />
            <br/>
            <label class="form-label">Nombre</label>
            <input type="text" class="form-control"
            v-model="alumno.nombre" />
            <br/>
            <label class="form-label">Apellidos</label>
            <input type="text" class="form-control"
            v-model="alumno.apellidos" />
            <br/>
            <label class="form-label">Imagen</label>
            <input type="text" class="form-control"
            v-model="alumno.imagen" />
            <br/>
            <label class="form-label">Activo</label>
            <input type="text" class="form-control"
            v-model="alumno.activo" />
            <br/>
            <label class="form-label">ID Curso</label>
            <input type="text" class="form-control"
            v-model="alumno.idCurso" disabled />
            <br/>
            <button class="btn btn-primary">Modificar</button>
        </form>
    </div>
  </div>
</template>

<script>
import ServiceAlumnos from '@/services/servicealumnos';
const service = new ServiceAlumnos;
const token = localStorage.getItem('token');

  export default {
    name: "UpdateAlumno",
    data() {
      return {
        alumno: null,

      };
    },
    mounted(){
      const token = localStorage.getItem('token');
      var id = this.$route.params.id;
      service.getAlumnosConToken(token, id).then(result =>{
        this.alumno = result;
      })
    },
    methods:{
      updateAlumno(){
        service.updateAlumno(token, this.alumno).then(result =>{
          console.log(result);
          this.$router.push("/alumnos");
        })
      }
    }
  }
</script>

<style>

</style>