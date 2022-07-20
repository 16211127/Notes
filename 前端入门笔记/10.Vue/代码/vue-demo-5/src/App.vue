
<template>
  <div>
    {{displayName}}
    <div>
        <div>
        <button @click="f1()">改名</button>
       </div>
    </div>
  </div>
</template>

  <script>
 export default {
  data(){
    return {
      user:{
        nickname:"xu",
        email:"123@qq.com",
        phone:"123",
      }
    }
  },
  computed:{
    displayName:{
        get() {
          const user = this.user;
          return user.nickname || user.email || user.phone;
        },
        set(value){
          console.log("set:" + value)
          this.user.nickname = "嘉然" 
          //改了这个,就等于改了displayname,因为get()变化了
        }
    },
  },
  methods:{
    f1(){
      this.displayName= "嘉然"
      console.log("方法: " + this.displayName)
    }
  }
}
</script>