import axios from "axios";
import Global from "@/Global";

export default class ServiceDepartamentos {
    getDepartamentos (){
        return new Promise(function(resolve) {
            var request = "api/departamentos";
            var url = Global.urlApiDepartamentos + request;
            var departamentos = [];
            axios.get(url).then(response =>{
                departamentos = response.data;
                resolve(departamentos);
            })
        })
    }

    crearDepartamento (departamento){
        return new Promise(function(resolve) {
            var request = "api/departamentos";
            var url = Global.urlApiDepartamentos + request;
            axios.post(url, departamento).then(response =>{
                resolve(response);
            })
        })
    }

    findDepartamento(id) {
        return new Promise(function(resolve){
            var request = "api/departamentos/" + id;
            var url = Global.urlApiDepartamentos + request;
            var departamento = {};
            axios.get(url).then(response =>{
                departamento = response.data;
                resolve(departamento);
            })

        })
    }

    updateDepartamento(departamento){
        return new Promise(function(resolve){
            var request = "api/departamentos";
            var url = Global.urlApiDepartamentos + request;
            axios.put(url, departamento).then(response =>{
                resolve(response);
            })
        })
    }
    
}