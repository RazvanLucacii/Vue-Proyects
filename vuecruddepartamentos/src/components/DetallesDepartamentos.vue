<template>
    <div>
        <h1>Detalles Departamentos</h1>
        <router-link class="btn btn-primary" to="/departamentos">Back</router-link>
        <h3> ID: {{ $route.params.id }} - Nombre: {{ $route.params.nombre }} - Localidad: {{ $route.params.localidad }}</h3>
    </div>
</template>

<script>
    export default {
        name: "DetallesDepartamentos",

    }
</script>

<style>

</style>