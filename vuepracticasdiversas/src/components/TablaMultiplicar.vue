<template>
    <div>
        <h1>Tabla De Multiplicar</h1>
        <label>Introduce un numero: </label>
        <input type="text" v-model="numero" />
        <button @click="generarTabla()">
            Generar Tabla
        </button>
        <hr/>
        <h1>Froma 1</h1>
        <div>
            <table border="1" v-if="numero != 0">
                <thead>
                    <tr>
                        <th>Operacion</th>
                        <th>Resultado</th>
                    </tr>
                </thead>
                <tbody v-html="html"></tbody>
            </table>
        </div>
        <hr/>
        <h1>Forma 2</h1>
        <div>
            <div>
            <table border="1">
                <thead>
                    <tr>
                        <th>Operacion</th>
                        <th>Resultado</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="num in 10" :key="num">
                        <td>{{ numero + " * " + num}}</td>
                        <td>{{ numero * num }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        </div>
        <hr/>
        <h1>Froma 3</h1>
        <div>
            <table border="1">
                <thead>
                    <tr>
                        <th>Operacion</th>
                        <th>Resultado</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="num in 10" :key="num">
                        <td>
                            {{ $filters.operacionTabla(numero, num) }}
                        </td>
                        <td>
                            {{ $filters.tablaMultiplicar(numero, num) }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TablaMultiplicar",
        data() {
            return {
                numero: 0,
                html: ""
            }
        },
        methods: {
            generarTabla() {
                this.html = "";

                for(var i = 1; i <= 10; i++ ){                    
                    var resultado = this.numero * i;
                    var operacion = this.numero + " * " + i;
                    this.html += "<tr>";
                    this.html += "<td>" + operacion + "</td>";
                    this.html += "<td>" + resultado + "</td>";
                    this.html += "</tr>";
                }
                
            }
        }, 
        
    }
</script>