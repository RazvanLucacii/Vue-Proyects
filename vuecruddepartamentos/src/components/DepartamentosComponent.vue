<template>
  <div>
    <h1>Crud Departamentos</h1>
    <img src="./../assets/images/gifload.gif"
        v-if="status == false" />
    <table v-else class="table table-bordered">
        <thead>
            <tr>
                <th>ID Departamento</th>
                <th>Nombre</th>
                <th>Localidad</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="dept in departamentos" :key="dept">
                <td>{{ dept.idDepartamento }}</td>
                <td>{{ dept.nombre }}</td>
                <td>{{ dept.localidad }}</td>
                <td>
                    <router-link class="btn btn-success" :to="'/detalles/' + dept.idDepartamento + '/' + dept.nombre + '/' + dept.localidad">
                        Detalles
                    </router-link>
                    <router-link class="btn btn-primary" :to="'/update/' + dept.idDepartamento">
                        Modificar
                    </router-link>
                </td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
import ServiceDepartamentos from './../services/ServiceDepartamentos';
const service = new ServiceDepartamentos();

export default {
    name: "DepartamentosComponent",
    data(){
        return{
            departamentos: [],
            status: false
        }
    },
    mounted(){
        service.getDepartamentos().then(result =>{
            this.departamentos = result;
            this.status = true;
        })
    }
}
</script>

<style>

</style>