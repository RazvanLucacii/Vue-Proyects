<template>
    <div>
        <ul id="menu">
            <li>
                <router-link to="/">Home</router-link>
            </li>
            <li>
                <router-link to="/deporte">Deporte</router-link>
            </li>
            <li>
                <router-link to="/suma">Sumar</router-link>
            </li>
            <li>
                <router-link to="/comic">Comics</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name:"MenuComponent"
    }

</script>

<style> 
    ul#menu li {
        display: inline
        
    }
    li {
        margin:1em
    }
</style>