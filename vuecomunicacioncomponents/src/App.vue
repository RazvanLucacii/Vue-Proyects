<template>
  <MenuComponents />
  <hr/>
  <MenuTabla />
  <hr/>
</template>

<script>
import MenuComponents from './components/MenuComponents.vue';
import MenuTabla from './components/MenuTabla.vue';
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default {
  name: 'App',
  components: {
    MenuComponents,
    MenuTabla
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
