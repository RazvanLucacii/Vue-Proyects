<template>
    <div>
        <h1 style="color:red">Numero PAR IMPAR</h1>
        <label>Numero: </label>
        <input type="number" v-model="numPar"/>
        <div v-html="numeroPar"></div>
        <button @click="getEvaluarNumero()">
            Evaluar Número
        </button>
        <h3 v-if="numPar % 2 == 0" style="color:blue">
            Número PAR: {{numPar}}
        </h3>
        <h3 v-else style="color:brown">
            Número IMPAR: {{numPar}}
        </h3>
        <div v-html="html"></div>
    </div>
</template>
<script>
    export default {
        name: "NumeroParImpar", 
        methods: {
            getEvaluarNumero() {
                if (this.numero % 2 == 0){
                    this.html = "<h1 style='color:fuchsia'>Par: " 
                    + this.numero + "</h1>";
                }else{
                    this.html = "<h1 style='color:orange'>Impar: " 
                    + this.numero + "</h1>";
                }
            }
        },

        computed: {
            numeroPar(){
                var numero = this.numPar;
                
                if(numero % 2 == 0){
                    return ("<span style='color:red'>El numero " + numero + " es par.</span>");
                }else{
                    return ("<span style='color:red'>El numero " + numero + " es impar.</span>");
                }
            }
        },

        data(){
            return {
                numPar: 0,
                html: ""
            }
        }
    }
</script>