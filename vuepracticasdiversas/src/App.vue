<template>
  <MenuComponent />
  <h1 style="color:blue">
    Titulo estatico de App
  </h1>
  <hr/>
  <router-view></router-view>
  <hr/>
</template>

<script>
import MenuComponent from './components/MenuComponent.vue';

export default {
  name: 'App',
  components: {
    MenuComponent,
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
}
</style>
