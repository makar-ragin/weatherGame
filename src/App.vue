<template>
<div id=app>

  <WeatherGame apiKey="8656d71fb5e84f328c9134151211204"/>

</div>
</template>


<script>
import WeatherGame from './components/WeatherGame.vue'

export default {
  name: 'App',
  components: {
    WeatherGame
  }
}   

</script>


<style>
#app {
  font-family: Times;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  margin-top: 60px;
}
</style>
