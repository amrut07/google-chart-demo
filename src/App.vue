<template>
  <div id="app">
    <Chart/>
  </div>
</template>

<script>
import Chart from './components/Chart'

export default {
  name: 'App',
  components: {
    Chart
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
