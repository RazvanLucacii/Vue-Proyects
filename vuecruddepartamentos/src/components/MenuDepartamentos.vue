<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand">Crud Departamentos</a>
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
                    <router-link class="nav-link active" to="/departamentos">
                        Departamentos
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link active" to="/create">
                        Nuevo Departamento
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
        name: "MenuDepartamentos",
    }
</script>

<style>

</style>