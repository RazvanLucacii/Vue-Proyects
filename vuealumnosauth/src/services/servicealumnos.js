import axios from 'axios';
import Global from '@/Global';
import ServiceAuth from './serviceauth';
const service = new ServiceAuth;

export default class ServiceAlumnos {
    getAlumnos(){
        return new Promise(function(resolve) {
            var request = "api/alumnos/alumnostoken";
            var url = Global.apiUrls + request;
            var alumnos = [];
            axios.get(url, {
                headers: {
                    Authorization: `Bearer ` + service.token,
                },
            }).then(response =>{
                alumnos = response.data;
                resolve(alumnos);
            })
        })
    }
}