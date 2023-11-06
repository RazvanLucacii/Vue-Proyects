import Global from "@/Global";
import axios from 'axios'

export default class ServiceEmpleados {
    findEmpleados(idEmpleado) {
        return new Promise (function(resolve) {
            var request = "api/empleados/" + idEmpleado;
            var url = Global.urlApiEmpleados + request;
            var empleado = null;
            axios.get(url).then(response =>{
                empleado = response.data;
                resolve(empleado);
            })
        })
    }

    getEmpleados(){
        return new Promise (function(resolve) {
            var request = "api/empleados";
            var url = Global.urlApiEmpleados + request;
            var empleados = []; 
            axios.get(url).then(response =>{
                empleados = response.data;
                resolve(empleados)
            })
        })
    }

    
}