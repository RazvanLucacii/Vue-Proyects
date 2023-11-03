<template>
    <div>
        <h1>Número doble Router</h1>
        <button @click="redirectToHome()">
            Go to Home
        </button>
        <h2 style="color:red" v-if="mensaje">
            {{mensaje}}
        </h2>
        <div v-else>
            <h2 style="color:blue">
                El número recibido es {{numero}}
            </h2>
            <h2 style="color:green">
                El doble del número es {{doble}}
            </h2>
        </div>
    </div>
</template>
<script>
    export default {
        name: "NumeroDoble", 
        methods: {
            redirectToHome() {
                this.$router.push("/");
            }
        },
        watch: {
            '$route.params.numero'(nextVal, oldVal){
                //SOLAMENTE DESEAMOS REALIZAR LAS ACCIONES CUANDO
                //NUESTRO PARAMETRO CAMBIE
                if (nextVal != oldVal){
                    //ACCIONES
                    this.numero = parseInt(this.$route.params.numero);
                    this.doble = this.numero * 2;
                }
            }
        },
        data() {
            return {
                mensaje: null,
                numero: 0, 
                doble: 0
            }
        },
        mounted() {
            //DIBUJAMOS NUESTRO PARAMETRO
            //LOS PARAMETROS SON STRING, NO IMPORTA SI SON VALORES NUMEROS
            //O NO
            console.log(this.$route.params.numero);
            var paramNumero = this.$route.params.numero;
            if (paramNumero == ""){
                console.log("Sin parámetros");
                this.mensaje = "No tenemos parámetros...";
            }else{
                console.log("Parámetro recibido: " + paramNumero);
                this.numero = parseInt(this.$route.params.numero);
                this.doble = this.numero * 2;
            }
        }
    }
</script>
