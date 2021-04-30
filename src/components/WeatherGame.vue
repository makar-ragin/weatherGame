<!--
1. Ввести любой город
2. Ввести город (с большей температурой)
	2.1. Если температура больше, добавить очко, макс_темп=темп, ввести новый город
        2.2. Если нет, конец игры, показать очки, обновить hiscore
-->

<template>
<div class="weatherGame">

<p>Hiscore: {{ hiscore }}</p>

<div v-if=!fetched>
	<p>Введите любой город <br> Enter any city</p>
</div>


<!-- If not game over -->
<div v-if=fetched&&continueGame>
	<p>Score: {{ score }}</p>
	<img :src=icon alt="weather">
	<p>{{ locationName }}: {{ temp }} °C</p>
	<p>
	Введите город с большей температурой 
	<br>
	Enter a city a with higher temperature
	</p>
</div>

<!-- If game over -->
<div v-if=fetched&&!continueGame>
	<p>Game over!</p>
        <p>Final score: {{ score }}</p>
</div>


<input 
  v-if=continueGame
  v-model="q"
  type="text" 
  class="SearchInput" 
  placeholder="CITY NAME" 
>

<button @click=fetchAPI v-if=continueGame>Enter</button>
<button @click=reset v-if=continueGame>Restart</button>

<button @click=retry v-if=!continueGame>Retry</button>

<p id="err" v-if=error> Неизвестный город <br> Unknown city</p>

</div>
</template>


<script>
import axios from 'axios'

export default {
  name: 'WeatherGame',
  props: {
    apiKey: String,
    q: String
  },
  data () {
    return {
      locationName: null,
      icon: null,
      temp: null,
      max_temp: null,
      score: 0,
      hiscore: 0,
      error: false
    }
  },
  methods: {
    fetchAPI() {
      axios
        .get("http://api.weatherapi.com/v1/current.json?key="+this.apiKey+"&q="+this.q)
        .then(response => (
                           this.locationName = response.data.location.name,
                           this.icon = response.data.current.condition.icon,
                           this.temp = response.data.current.temp_c,
                           this.error = false
                           ))
        .catch(() => this.error = true)
    },
    reset() {
      this.locationName = null;
      this.temp = null;
      this.max_temp = null;
      this.score = 0; 
      this.icon = null;
    },
    retry() {
      if(this.score > this.hiscore){
        this.hiscore = this.score;
      }
      this.reset()
    },
    increaseScore() {
      this.score += 1;
    },
    newMaxTemp() {
      this.max_temp = this.temp;
    }
  },
  computed: {
    fetched() {
      if(this.locationName && this.icon && this.temp){
        return true;
      }
      return false;
    },
    continueGame() {
      if (this.max_temp == null){
        this.newMaxTemp();
        return true;
      }else if(this.temp > this.max_temp) {
        this.increaseScore();
        this.newMaxTemp();
        return true;
      }else {
        return false;
      }
    }
  }
}
</script>


<style scoped>
#err {
 color: #ff0000
}
</style>