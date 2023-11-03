<template>
    <div>
        <h1>Tabla Multiplicar</h1>
        <table border="1">
            <thead>
                <tr>
                    <th>Operacion</th>
                    <th>Resultado</th>
                </tr>
            </thead>
            <tbody v-html="html"></tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "TablaMultiplicar",
        watch: {
            '$route.params.numero'(nextVal, oldVal){
                if (nextVal != oldVal){
                    this.generarTabla();
                }
            }
        },
        mounted(){
            this.generarTabla();
        },
        data(){
            return{
                numero: 0,
                html: ""
            }
        },
        methods: {
            generarTabla(){
                this.numero = parseInt(this.$route.params.numero);
                this.html = "";
                for (let index = 0; index <= 10; index++) {
                    var operacion = this.numero + " * " + index;
                    var resultado = this.numero * index;
                    this.html += "<tr>";
                    this.html += "<td>" + operacion + "</td>";
                    this.html += "<td>" + resultado + "</td>";
                    this.html += "</tr>";
                }
            }
        },
    }
</script>