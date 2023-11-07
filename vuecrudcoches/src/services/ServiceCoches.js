import axios from "axios";
import Global from "@/Global";

export default class ServiceCoches {
    getCoches (){
        return new Promise(function(resolve) {
            var request = "api/coches";
            var url = Global.apiUrlCoches + request;
            var coches = [];
            axios.get(url).then(response =>{
                coches = response.data;
                resolve(coches);
            })
        })
    }

    crearCoche(coche){
        return new Promise(function(resolve) {
            var request = "api/coches/insertcoche";
            var url = Global.apiUrlCoches + request;
            fetch(url, {
                method: "POST",
                body: JSON.stringify(coche),
                headers: {
                  "Content-Type": "application/json",
                },
            }).then(response =>{
                response.json();
                resolve(response);
            })
        })
    }

    findCoche(id) {
        return new Promise(function(resolve){
            var request = "api/coches/findcoche/" + id;
            var url = Global.apiUrlCoches + request;
            var coche = {};
            axios.get(url).then(response =>{
                coche = response.data;
                resolve(coche);
            })

        })
    }

    updateCoche(coche){
        return new Promise(function(resolve){
            var request = "api/coches/updatecoche";
            var url = Global.apiUrlCoches + request;
            axios.put(url, coche).then(response =>{
                resolve(response);
            })
        })
    }

    deleteCoche(id){
        return new Promise(function(resolve){
            var request = "api/coches/deletecoche/" + id;
            var url = Global.apiUrlCoches + request;
            axios.delete(url).then(response =>{
                resolve(response);
            })
        })
    }
    
}