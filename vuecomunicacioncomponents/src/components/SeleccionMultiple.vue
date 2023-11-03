<template>
  <div>
    <div class="container">
        <h1>Select Multiple</h1>
        <form v-on:submit.prevent="mostrarSeleccionado()">
            <select size="8" multiple v-model="opcionesSeleccionadas">
                <option v-for="option in opciones" :key="option">
                    {{ option }}
                </option>
            </select>
            <button>
                Mostrar Seleccionados
            </button>
        </form>
        <h2 style="color:blue">
            {{ seleccionados }}
        </h2>
        <hr/>
    </div>
    <div class="container">
        <h1>Ejemplo Checkbox</h1>
        <br/>
        <form v-on:submit.prevent="generarCheckbox()">
            <button>
                Generar Checkbox
            </button>
            <br/><br/>
            <ul>
                <li v-for="box in checkboxes" :key="box">
                    {{ box }} <input type="checkbox" :value="box" @input="sumar($event)"/>
                </li>
            </ul>
            <h2 >La Suma Seleccionada es {{ suma }}</h2>
        </form>
        <hr/>
    </div>
  </div>
</template>

<script>
    export default {
        name: "SelectMultiple",
        methods:{
            mostrarSeleccionado() {
                this.seleccionados = "";
                for (var option of this.opcionesSeleccionadas){
                    this.seleccionados += option + ",";
                }

            },
            generarCheckbox(){
                for (let index = 0; index < 10; index++) {
                    var aleatorio = parseInt(Math.random() * 100) + 1;
                    this.checkboxes.push(aleatorio);
                }
            },
            sumar (event){
                var input = event.target;
                if(input.checked == true){
                    this.suma += parseInt(input.value);
                }else{
                    this.suma -= parseInt(input.value);
                }
            }
        
        },
        data(){
            return{
                opciones: ["A", "B", "C", "D", "E", "F", "Opcion T"],
                opcionesSeleccionadas: [],
                seleccionados: "",
                checkboxes: [],
                suma: 0

            }
        }
    }
</script>

<style>
    ul li{
        display: inline;
    }    
</style>
