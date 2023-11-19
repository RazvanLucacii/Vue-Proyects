<template>
  <div>
    <h1>Crud Alumnos Auth</h1>
    <img src="./../assets/images/gifload.gif"
        v-if="status == false" />
    <table v-else class="table table-bordered">
        <thead>
            <tr>
                <th>ID Alumno</th>
                <th>Nombre</th>
                <th>Apellidos</th>
                <th>Imagen</th>
                <th>Activo</th>
                <th>ID Curso</th>
                <th>-</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="alumno in alumnos" :key="alumno">
                <td>{{ alumno.idAlumno }}</td>
                <td>{{ alumno.nombre }}</td>
                <td>{{ alumno.apellidos }}</td>
                <td>{{ alumno.imagen }}</td>
                <td>{{ alumno.activo }}</td>
                <td>{{ alumno.idCurso }}</td>
                <td>
                    <router-link class="btn btn-primary" :to="'/update/' + alumno.idAlumno">
                        Modificar
                    </router-link>
                </td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';
import Global from '@/Global';

    export default {
        name: "AlumnosComponent",
        data() {
            return {
                alumnos: [],
                status: false
            };
        },
        mounted() {
            // Verifica si hay un token almacenado antes de realizar la llamada a la API.
            const token = localStorage.getItem('token');
            this.getAlumnosConToken(token);
            
        },
        methods: {
            async getAlumnosConToken(token) {
            try {
                var request = "api/alumnos/alumnostoken";
                var url = Global.apiUrls + request;
                const response = axios.get(url, {
                    headers: {
                        Authorization: "bearer " + token,
                    },
                });

                this.alumnos = response.data;
            } catch (error) {
                console.error('Error al obtener alumnos con token:', error);
            }
            },
        },
    };
</script>
