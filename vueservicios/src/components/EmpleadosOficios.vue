<template>
    <div>
        <h1>Empleados Oficios</h1>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>Apellido</th>
                    <th>Oficio</th>
                    <th>Salario</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="empleado in empleados" :key="empleado">
                    <td>{{ empleado.apellido }}</td>
                    <td>{{ empleado.oficio }}</td>
                    <td>{{ empleado.salario }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import Global from '@/Global';
import axios from 'axios';

    export default {
        name: "EmpleadosOficios",
        data(){
            return{
                empleados: []
            }
        },
        watch:{
            '$route.params.oficio'(nextVal, oldVal){
                if(nextVal != oldVal){
                    this.loadEmpleados();
                }
            }
        },
        methods:{
            loadEmpleados(){
                var oficio = this.$route.params.oficio;
                var request = "api/empleados/empleadosoficio/" + oficio;
                var url = Global.urlApiEmpleados + request;
                axios.get(url).then(response =>{
                    this.empleados = response.data;
                })

            }
        },
        mounted(){
            this.loadEmpleados();
        }
    }
</script>

<style>

</style>