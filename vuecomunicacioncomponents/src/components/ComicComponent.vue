<template>
    <div class="container">
        <div class="card" style="width: 25rem; height: 30rem;">
            <img :src="comic.imagen" class="card-img-top" alt="comic">
            <div class="card-body">
                <h4 class="card-title">{{ comic.titulo }}</h4>
                <p class="card-text">{{ comic.descripcion }}</p>
                <h4 :class="{
                    rojo: comic.year <= 2000,
                    verde: comic.year > 2000
                }">Año {{ comic.year }}</h4>
                <button class="btn btn-primary" @click="seleccionarFavorito()">
                    Seleccionar Favorito
                </button>
                <button class="btn btn-danger" @click="eliminarComic()">
                    Eliminar Comic
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ComicHijo",
        props: ["comic", "index"],
        methods:{
            seleccionarFavorito(){
                this.$emit("seleccionarFavorito", this.comic)
            },
            eliminarComic(){
                this.$emit("eliminarComic", this.index);
            }
        }
    }
</script>

<style>
    @import "./../assets/css/estilocomics.css";
</style>