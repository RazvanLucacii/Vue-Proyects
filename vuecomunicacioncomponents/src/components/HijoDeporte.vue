<template>
    <div>
        <hr/>
        <h2 style="color:blue">
            {{ nombredeporte }}
        </h2>
        <button @click="seleccionarFavorito()">
            Seleccionar Favorito
        </button>
    </div>
</template>

<script>
    export default {
        name: "HijoDeporte",
        props: ["nombredeporte"],
        methods: {
            seleccionarFavorito (){
                console.log("Favorito seleccionado");
                //realizamos la llamada al parent
                //tenemos la posibilidad de enviar paramentros al
                //metodo padre a continuacion de la llamada
                //y separados por comas
                this.$emit("seleccionarFavoritoParent", this.nombredeporte);
            }
        }
    }
</script>