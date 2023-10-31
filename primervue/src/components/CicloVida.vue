<template>
    <div>
        <h1 style="color:red">Hooks</h1>
        <button @click="cambiarSaludo()">
            Cambiar
        </button>
        <h1 style="color:fuchsia">
            {{ saludo }}
        </h1>
    </div>
</template>

<script>
    export default {
        name: "CicloVida",
        data (){
            return {
                saludo: "Hoy es martes..."
            }
        },
        methods: {
            //aqui dentro debemos incluir nuestro metodos personalizados
            cambiarSaludo(){
                //dentro de los metodos, para acceder a las variables data()
                //debemos utilizar la palavra this
                this.saludo = "Y esta noche es Halloween !!!";
            }
        },
        mounted (){
            console.log("Component montado");
        },
        unmounted (){
            console.log("Component destruido");
        },
        updated (){
            console.log("Component modificado");
        },
        created (){
            console.log("Component creado");
        },
    }

</script>