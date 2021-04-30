import Vue from 'vue'
import App from './App.vue'


Vue.config.productionTip = false

/*
new Vue({
  el: '#app',
  data: {
    info: "test"
  }
}).mount('#app')
//.$mount('#app')
*/
 

new Vue({
  render: h => h(App),
data: {
  //info:  
},


}).$mount('#app')

/*

mounted () {
  fetch("http://api.weatherapi.com/v1/current.json?key=8656d71fb5e84f328c9134151211204&q=London")
  .then(res => {this.info = res.data})
  .catch(error => {
        console.log(error)
        this.errored = true
      })
}

*/