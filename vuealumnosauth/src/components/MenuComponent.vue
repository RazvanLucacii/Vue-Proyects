<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand">Crud Alumnos</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link class="nav-link active" to="/">
                            Home
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link active" to="/login">
                            Login
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link active" to="/alumnos">
                            Alumnos
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link active" to="/create">
                            Nuevo Alumno
                        </router-link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "MenuComponent"
    }
</script>

<style>

</style>