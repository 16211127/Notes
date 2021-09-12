import Vue from 'vue'
// import App from './App.vue'

// Vue.config.productionTip = false
import Demo from './Demo.vue'
console.log(Demo.render.toString())
new Vue({
  el:'#app',
  render(h){
    return h(Demo)
  }
});
//render将写的template自动翻译成了render