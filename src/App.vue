<template>
  <div id="app">
      <layout msg="Welcome to Your Vue.js App"></layout>
  </div>
</template>

<script>
import layout from './view/layout/index.vue'

export default {
  name: 'app',
  components: {
      layout
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
