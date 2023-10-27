<template>
  <HolaMundo/>
  <HomeComponent/>
  <CineComponent/>
  <MusicaComponent/>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HolaMundo from './components/HolaMundo.vue';
import HelloWorld from './components/HelloWorld.vue';
import CineComponent from './components/CineComponent.vue';
import MusicaComponent from './components/MusicaComponent.vue';
import HomeComponent from './components/HomeComponent.vue';

export default {
  name: 'App',
  components: {
    HolaMundo,
    HelloWorld,
    HomeComponent,
    CineComponent,
    MusicaComponent
    
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
