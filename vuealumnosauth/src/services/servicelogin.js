import Global from "./../Global";
import axios from "axios";
import ServiceAuth from './serviceauth';
const service = new ServiceAuth();

export default class ServiceLogin {

    data(){
        return{
            userName: "",
            password: "",
        }
    }

    login(){
        return new Promise(function(resolve){
            var request = "api/auth/login";
            var url = Global.apiUrls + request;
            axios.post(url, {
                userName: "",
                password: ""
            }).then(response =>{
                response(resolve);
                console.log(resolve);
            })
        })
    }

    setToken(token){
        service.token = token;
    }
}