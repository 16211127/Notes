import Vue from 'vue'
import Demo from 'Demo.vue'
Vue.config.productionTip = false

new Vue({

  data:{
    visible:true
  },
  template:`
  <div>
    <Demo message = "你好 props"/>
  </div>
  `

}).$mount('#app')
