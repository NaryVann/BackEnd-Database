<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <tasklistComponent/>
  </div>
</template>

<script>
import tasklistComponent from './components/tasklistComponent.vue'

export default {
  name: 'App',
  components: {
    tasklistComponent
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
