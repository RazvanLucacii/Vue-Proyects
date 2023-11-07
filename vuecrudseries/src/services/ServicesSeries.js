import axios from "axios";
import Global from "@/Global";

export default class ServicesSeries {
    getSeries(){
        return new Promise(function(resolve){
            var request = "api/series";
            var url = Global.apiUrlSeries + request;
            var series = [];
            axios.get(url).then(response =>{
                series = response.data;
                resolve(series);
            })
        })
    }

    findSeries(id){
        return new Promise(function(resolve){
            var request = "api/series/" + id;
            var url = Global.apiUrlSeries + request;
            var serie = {};
            axios.get(url).then(response =>{
                serie = response.data;
                resolve(serie);
            })
        })
    }
}