import axios from 'axios';
import Global from '@/Global';

export default class ServiceAlumnos {
    token = localStorage.getItem('token');

    getAlumnosConToken(token, id) {
        return new Promise(function(resolve){
            console.log(token);
            try {
                var request = "api/alumnos/findalumnotoken/" + id;
                var url = Global.apiUrls + request;
                var alumno = {};
                axios.get(url, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `bearer ${token}`,
                    },
                }).then(response =>{
                    alumno = response.data;
                    resolve(alumno);
                })
            } catch (error) {
                console.error('Error al obtener alumnos con token:', error);
            }
        })
    }

    updateAlumno(token, alumno){
        return new Promise(function(resolve){
            var request = "api/alumnos/updatealumnotoken";
            var url = Global.apiUrls + request;
            axios.put(url, alumno, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `bearer ${token}`,
                },
            }).then(response =>{
                resolve(response);
            })
        })
    }
}
